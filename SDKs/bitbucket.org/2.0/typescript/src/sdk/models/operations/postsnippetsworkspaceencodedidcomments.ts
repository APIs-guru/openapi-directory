import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSnippetsWorkspaceEncodedIdCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostSnippetsWorkspaceEncodedIdCommentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostSnippetsWorkspaceEncodedIdCommentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostSnippetsWorkspaceEncodedIdCommentsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostSnippetsWorkspaceEncodedIdCommentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostSnippetsWorkspaceEncodedIdCommentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostSnippetsWorkspaceEncodedIdCommentsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostSnippetsWorkspaceEncodedIdCommentsSecurityOption3;
}


export class PostSnippetsWorkspaceEncodedIdCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSnippetsWorkspaceEncodedIdCommentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostSnippetsWorkspaceEncodedIdCommentsSecurity;
}


export class PostSnippetsWorkspaceEncodedIdCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  snippet?: Map<string, any>;
}
