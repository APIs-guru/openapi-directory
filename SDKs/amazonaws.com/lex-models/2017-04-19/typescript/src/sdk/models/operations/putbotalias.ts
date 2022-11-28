import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutBotAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutBotAliasHeaders extends SpeakeasyBase {
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


// PutBotAliasRequestBodyConversationLogs
/** 
 * Provides the settings needed for conversation logs.
**/
export class PutBotAliasRequestBodyConversationLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=logSettings", elemType: shared.LogSettingsRequest })
  logSettings?: shared.LogSettingsRequest[];
}


export class PutBotAliasRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationLogs" })
  conversationLogs?: PutBotAliasRequestBodyConversationLogs;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class PutBotAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBotAliasPathParams;

  @SpeakeasyMetadata()
  headers: PutBotAliasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutBotAliasRequestBody;
}


export class PutBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  putBotAliasResponse?: shared.PutBotAliasResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
