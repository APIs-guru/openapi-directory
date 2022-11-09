import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteSnippetsWorkspaceEncodedIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSnippetsWorkspaceEncodedIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteSnippetsWorkspaceEncodedIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteSnippetsWorkspaceEncodedIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteSnippetsWorkspaceEncodedIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteSnippetsWorkspaceEncodedIdSecurityOption3;
}


export class DeleteSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSnippetsWorkspaceEncodedIdPathParams;

  @Metadata()
  security: DeleteSnippetsWorkspaceEncodedIdSecurity;
}


export class DeleteSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
