import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApplicationSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateApplicationSettingsHeaders extends SpeakeasyBase {
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
}


// UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest
/** 
 * Specifies the default settings for an application.
**/
export class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignHook" })
  campaignHook?: shared.CampaignHook;

  @Metadata({ data: "json, name=CloudWatchMetricsEnabled" })
  cloudWatchMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=EventTaggingEnabled" })
  eventTaggingEnabled?: boolean;

  @Metadata({ data: "json, name=Limits" })
  limits?: shared.CampaignLimits;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: shared.QuietTime;
}


export class UpdateApplicationSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteApplicationSettingsRequest" })
  writeApplicationSettingsRequest: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
}


export class UpdateApplicationSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApplicationSettingsPathParams;

  @Metadata()
  headers: UpdateApplicationSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateApplicationSettingsRequestBody;
}


export class UpdateApplicationSettingsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateApplicationSettingsResponse?: shared.UpdateApplicationSettingsResponse;
}
