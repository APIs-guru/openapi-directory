import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurityOption3;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathPathParams;

  @Metadata()
  security: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurity;
}


export class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
