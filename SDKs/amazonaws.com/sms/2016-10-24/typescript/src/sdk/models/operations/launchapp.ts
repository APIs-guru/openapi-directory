import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LaunchAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024LaunchApp = "AWSServerMigrationService_V2016_10_24.LaunchApp"
}


export class LaunchAppHeaders extends SpeakeasyBase {
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
  xAmzTarget: LaunchAppXAmzTargetEnum;
}


export class LaunchAppRequest extends SpeakeasyBase {
  @Metadata()
  headers: LaunchAppHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LaunchAppRequest;
}


export class LaunchAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  launchAppResponse?: Map<string, any>;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
