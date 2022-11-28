import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBotLocalePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class UpdateBotLocaleHeaders extends SpeakeasyBase {
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


// UpdateBotLocaleRequestBodyVoiceSettings
/** 
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export class UpdateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=voiceId" })
  voiceId?: string;
}


export class UpdateBotLocaleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold: number;

  @SpeakeasyMetadata({ data: "json, name=voiceSettings" })
  voiceSettings?: UpdateBotLocaleRequestBodyVoiceSettings;
}


export class UpdateBotLocaleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBotLocalePathParams;

  @SpeakeasyMetadata()
  headers: UpdateBotLocaleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBotLocaleRequestBody;
}


export class UpdateBotLocaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateBotLocaleResponse?: shared.UpdateBotLocaleResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
