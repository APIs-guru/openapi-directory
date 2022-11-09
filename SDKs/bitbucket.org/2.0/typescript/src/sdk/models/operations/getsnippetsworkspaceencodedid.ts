import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsWorkspaceEncodedIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsWorkspaceEncodedIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsWorkspaceEncodedIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsWorkspaceEncodedIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsWorkspaceEncodedIdSecurityOption3;
}


export class GetSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSnippetsWorkspaceEncodedIdPathParams;

  @Metadata()
  security: GetSnippetsWorkspaceEncodedIdSecurity;
}


export class GetSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  snippet?: Map<string, any>;
}
