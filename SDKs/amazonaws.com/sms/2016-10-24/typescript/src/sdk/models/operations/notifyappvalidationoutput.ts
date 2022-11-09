import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum NotifyAppValidationOutputXAmzTargetEnum {
    AwsServerMigrationServiceV20161024NotifyAppValidationOutput = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput"
}


export class NotifyAppValidationOutputHeaders extends SpeakeasyBase {
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
  xAmzTarget: NotifyAppValidationOutputXAmzTargetEnum;
}


export class NotifyAppValidationOutputRequest extends SpeakeasyBase {
  @Metadata()
  headers: NotifyAppValidationOutputHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NotifyAppValidationOutputRequest;
}


export class NotifyAppValidationOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  notifyAppValidationOutputResponse?: Map<string, any>;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
