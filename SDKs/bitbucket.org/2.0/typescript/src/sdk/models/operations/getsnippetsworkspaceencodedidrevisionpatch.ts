import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnippetsWorkspaceEncodedIdRevisionPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revision" })
  revision: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsWorkspaceEncodedIdRevisionPatchSecurityOption3;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSnippetsWorkspaceEncodedIdRevisionPatchPathParams;

  @Metadata()
  security: GetSnippetsWorkspaceEncodedIdRevisionPatchSecurity;
}


export class GetSnippetsWorkspaceEncodedIdRevisionPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
