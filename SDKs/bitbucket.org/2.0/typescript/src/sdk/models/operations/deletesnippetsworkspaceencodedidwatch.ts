import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSnippetsWorkspaceEncodedIdWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteSnippetsWorkspaceEncodedIdWatchSecurityOption3;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSnippetsWorkspaceEncodedIdWatchPathParams;

  @Metadata()
  security: DeleteSnippetsWorkspaceEncodedIdWatchSecurity;
}


export class DeleteSnippetsWorkspaceEncodedIdWatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedUsers?: shared.PaginatedUsers;
}
