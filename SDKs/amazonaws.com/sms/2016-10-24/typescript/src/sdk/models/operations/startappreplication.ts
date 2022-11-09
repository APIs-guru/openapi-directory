import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StartAppReplication = "AWSServerMigrationService_V2016_10_24.StartAppReplication"
}


export class StartAppReplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartAppReplicationXAmzTargetEnum;
}


export class StartAppReplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartAppReplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartAppReplicationRequest;
}


export class StartAppReplicationResponse extends SpeakeasyBase {
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
  startAppReplicationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
