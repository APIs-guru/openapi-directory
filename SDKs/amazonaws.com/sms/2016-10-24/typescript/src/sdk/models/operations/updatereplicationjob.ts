import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateReplicationJobXAmzTargetEnum {
    AwsServerMigrationServiceV20161024UpdateReplicationJob = "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob"
}


export class UpdateReplicationJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateReplicationJobXAmzTargetEnum;
}


export class UpdateReplicationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateReplicationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateReplicationJobRequest;
}


export class UpdateReplicationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  replicationJobNotFoundException?: any;

  @Metadata()
  serverCannotBeReplicatedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  temporarilyUnavailableException?: any;

  @Metadata()
  unauthorizedOperationException?: any;

  @Metadata()
  updateReplicationJobResponse?: Map<string, any>;
}
