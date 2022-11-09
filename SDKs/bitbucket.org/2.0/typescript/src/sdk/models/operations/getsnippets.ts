import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSnippetsRoleEnum {
    Owner = "owner"
,    Contributor = "contributor"
,    Member = "member"
}


export class GetSnippetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetSnippetsRoleEnum;
}


export class GetSnippetsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsSecurityOption3;
}


export class GetSnippetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSnippetsQueryParams;

  @Metadata()
  security: GetSnippetsSecurity;
}


export class GetSnippetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedSnippets?: shared.PaginatedSnippets;
}
