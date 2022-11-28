import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision" })
  revision: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams;

  @SpeakeasyMetadata()
  security: GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity;
}


export class GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  snippetCommit?: Map<string, any>;
}
