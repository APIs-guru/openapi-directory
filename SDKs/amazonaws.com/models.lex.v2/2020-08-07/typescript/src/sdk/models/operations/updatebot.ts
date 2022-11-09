import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class UpdateBotHeaders extends SpeakeasyBase {
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


// UpdateBotRequestBodyDataPrivacy
/** 
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
export class UpdateBotRequestBodyDataPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=childDirected" })
  childDirected?: boolean;
}


export class UpdateBotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName: string;

  @Metadata({ data: "json, name=dataPrivacy" })
  dataPrivacy: UpdateBotRequestBodyDataPrivacy;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdateBotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBotPathParams;

  @Metadata()
  headers: UpdateBotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBotRequestBody;
}


export class UpdateBotResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateBotResponse?: shared.UpdateBotResponse;

  @Metadata()
  validationException?: any;
}
