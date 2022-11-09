import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSnippetsWorkspaceEncodedIdWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutSnippetsWorkspaceEncodedIdWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutSnippetsWorkspaceEncodedIdWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutSnippetsWorkspaceEncodedIdWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutSnippetsWorkspaceEncodedIdWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutSnippetsWorkspaceEncodedIdWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutSnippetsWorkspaceEncodedIdWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutSnippetsWorkspaceEncodedIdWatchSecurityOption3;
}


export class PutSnippetsWorkspaceEncodedIdWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSnippetsWorkspaceEncodedIdWatchPathParams;

  @Metadata()
  security: PutSnippetsWorkspaceEncodedIdWatchSecurity;
}


export class PutSnippetsWorkspaceEncodedIdWatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedUsers?: shared.PaginatedUsers;
}
