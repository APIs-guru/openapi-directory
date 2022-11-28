import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSnippetsWorkspaceEncodedIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSnippetsWorkspaceEncodedIdCommentsPathParams;

  @SpeakeasyMetadata()
  security: GetSnippetsWorkspaceEncodedIdCommentsSecurity;
}


export class GetSnippetsWorkspaceEncodedIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedSnippetComments?: shared.PaginatedSnippetComments;
}
