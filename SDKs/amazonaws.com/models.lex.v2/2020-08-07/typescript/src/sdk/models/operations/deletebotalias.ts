import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteBotAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class DeleteBotAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skipResourceInUseCheck" })
  skipResourceInUseCheck?: boolean;
}


export class DeleteBotAliasHeaders extends SpeakeasyBase {
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


export class DeleteBotAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBotAliasPathParams;

  @Metadata()
  queryParams: DeleteBotAliasQueryParams;

  @Metadata()
  headers: DeleteBotAliasHeaders;
}


export class DeleteBotAliasResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteBotAliasResponse?: shared.DeleteBotAliasResponse;

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
