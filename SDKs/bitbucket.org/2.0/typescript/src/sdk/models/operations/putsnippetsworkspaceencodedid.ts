import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutSnippetsWorkspaceEncodedIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutSnippetsWorkspaceEncodedIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutSnippetsWorkspaceEncodedIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutSnippetsWorkspaceEncodedIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutSnippetsWorkspaceEncodedIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutSnippetsWorkspaceEncodedIdSecurityOption3;
}


export class PutSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSnippetsWorkspaceEncodedIdPathParams;

  @Metadata()
  security: PutSnippetsWorkspaceEncodedIdSecurity;
}


export class PutSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
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
