import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StopAppReplication = "AWSServerMigrationService_V2016_10_24.StopAppReplication"
}


export class StopAppReplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopAppReplicationXAmzTargetEnum;
}


export class StopAppReplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopAppReplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopAppReplicationRequest;
}


export class StopAppReplicationResponse extends SpeakeasyBase {
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
  statusCode: number;

  @Metadata()
  stopAppReplicationResponse?: Map<string, any>;

  @Metadata()
  unauthorizedOperationException?: any;
}
