import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurityOption3;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;

  @Metadata()
  security: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}


export class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
