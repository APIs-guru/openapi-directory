import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnippetsWorkspaceEncodedIdFilesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsWorkspaceEncodedIdFilesPathSecurityOption3;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSnippetsWorkspaceEncodedIdFilesPathPathParams;

  @Metadata()
  security: GetSnippetsWorkspaceEncodedIdFilesPathSecurity;
}


export class GetSnippetsWorkspaceEncodedIdFilesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
