import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSnippetsWorkspaceEncodedIdNodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=encoded_id" })
  encodedId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutSnippetsWorkspaceEncodedIdNodeIdSecurityOption3;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSnippetsWorkspaceEncodedIdNodeIdPathParams;

  @Metadata()
  security: PutSnippetsWorkspaceEncodedIdNodeIdSecurity;
}


export class PutSnippetsWorkspaceEncodedIdNodeIdResponse extends SpeakeasyBase {
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
