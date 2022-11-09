import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBotHeaders extends SpeakeasyBase {
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


// CreateBotRequestBodyDataPrivacy
/** 
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
export class CreateBotRequestBodyDataPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=childDirected" })
  childDirected?: boolean;
}


export class CreateBotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName: string;

  @Metadata({ data: "json, name=botTags" })
  botTags?: Map<string, string>;

  @Metadata({ data: "json, name=dataPrivacy" })
  dataPrivacy: CreateBotRequestBodyDataPrivacy;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=testBotAliasTags" })
  testBotAliasTags?: Map<string, string>;
}


export class CreateBotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBotRequestBody;
}


export class CreateBotResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBotResponse?: shared.CreateBotResponse;

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
  validationException?: any;
}
