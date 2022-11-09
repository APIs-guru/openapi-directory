import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption3;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;

  @Metadata()
  security: PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}


export class PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
