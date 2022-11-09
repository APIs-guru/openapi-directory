import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBotVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class CreateBotVersionHeaders extends SpeakeasyBase {
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


export class CreateBotVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botVersionLocaleSpecification", elemType: shared.BotVersionLocaleDetails })
  botVersionLocaleSpecification: Map<string, shared.BotVersionLocaleDetails>;

  @Metadata({ data: "json, name=description" })
  description?: string;
}


export class CreateBotVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBotVersionPathParams;

  @Metadata()
  headers: CreateBotVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBotVersionRequestBody;
}


export class CreateBotVersionResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBotVersionResponse?: shared.CreateBotVersionResponse;

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
