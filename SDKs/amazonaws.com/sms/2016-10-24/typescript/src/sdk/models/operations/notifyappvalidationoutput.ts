import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum NotifyAppValidationOutputXAmzTargetEnum {
    AwsServerMigrationServiceV20161024NotifyAppValidationOutput = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput"
}


export class NotifyAppValidationOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: NotifyAppValidationOutputXAmzTargetEnum;
}


export class NotifyAppValidationOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: NotifyAppValidationOutputHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NotifyAppValidationOutputRequest;
}


export class NotifyAppValidationOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalError?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  missingRequiredParameterException?: any;

  @SpeakeasyMetadata()
  notifyAppValidationOutputResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedOperationException?: any;
}
