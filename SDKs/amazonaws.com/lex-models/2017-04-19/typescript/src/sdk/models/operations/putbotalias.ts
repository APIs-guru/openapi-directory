import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutBotAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutBotAliasHeaders extends SpeakeasyBase {
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


// PutBotAliasRequestBodyConversationLogs
/** 
 * Provides the settings needed for conversation logs.
**/
export class PutBotAliasRequestBodyConversationLogs extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=logSettings", elemType: shared.LogSettingsRequest })
  logSettings?: shared.LogSettingsRequest[];
}


export class PutBotAliasRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botVersion" })
  botVersion: string;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=conversationLogs" })
  conversationLogs?: PutBotAliasRequestBodyConversationLogs;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class PutBotAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutBotAliasPathParams;

  @Metadata()
  headers: PutBotAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutBotAliasRequestBody;
}


export class PutBotAliasResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  putBotAliasResponse?: shared.PutBotAliasResponse;

  @Metadata()
  statusCode: number;
}
