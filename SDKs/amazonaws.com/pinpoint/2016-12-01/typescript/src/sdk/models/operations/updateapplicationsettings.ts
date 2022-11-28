import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApplicationSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApplicationSettingsHeaders extends SpeakeasyBase {
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
}


// UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest
/** 
 * Specifies the default settings for an application.
**/
export class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignHook" })
  campaignHook?: shared.CampaignHook;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchMetricsEnabled" })
  cloudWatchMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EventTaggingEnabled" })
  eventTaggingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: shared.CampaignLimits;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: shared.QuietTime;
}


export class UpdateApplicationSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WriteApplicationSettingsRequest" })
  writeApplicationSettingsRequest: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
}


export class UpdateApplicationSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApplicationSettingsPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApplicationSettingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApplicationSettingsRequestBody;
}


export class UpdateApplicationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateApplicationSettingsResponse?: shared.UpdateApplicationSettingsResponse;
}
