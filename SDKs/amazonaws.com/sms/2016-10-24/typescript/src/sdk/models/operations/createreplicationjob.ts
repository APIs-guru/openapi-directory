import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateReplicationJobXAmzTargetEnum {
    AwsServerMigrationServiceV20161024CreateReplicationJob = "AWSServerMigrationService_V2016_10_24.CreateReplicationJob"
}


export class CreateReplicationJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateReplicationJobXAmzTargetEnum;
}


export class CreateReplicationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReplicationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateReplicationJobRequest;
}


export class CreateReplicationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createReplicationJobResponse?: shared.CreateReplicationJobResponse;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  noConnectorsAvailableException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  replicationJobAlreadyExistsException?: any;

  @Metadata()
  serverCannotBeReplicatedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  temporarilyUnavailableException?: any;

  @Metadata()
  unauthorizedOperationException?: any;
}
