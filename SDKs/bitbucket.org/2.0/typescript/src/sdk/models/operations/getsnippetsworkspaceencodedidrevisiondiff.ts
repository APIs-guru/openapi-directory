import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision" })
  revision: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;
}


export class GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdRevisionDiffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams;

  @SpeakeasyMetadata()
  security: GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity;
}


export class GetSnippetsWorkspaceEncodedIdRevisionDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
