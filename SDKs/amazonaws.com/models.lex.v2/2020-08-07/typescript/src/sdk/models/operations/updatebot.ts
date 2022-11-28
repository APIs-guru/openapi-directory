import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class UpdateBotHeaders extends SpeakeasyBase {
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


// UpdateBotRequestBodyDataPrivacy
/** 
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
export class UpdateBotRequestBodyDataPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childDirected" })
  childDirected?: boolean;
}


export class UpdateBotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "json, name=dataPrivacy" })
  dataPrivacy: UpdateBotRequestBodyDataPrivacy;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdateBotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBotPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBotRequestBody;
}


export class UpdateBotResponse extends SpeakeasyBase {
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
  updateBotResponse?: shared.UpdateBotResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
