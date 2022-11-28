import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSnippetsRoleEnum {
    Owner = "owner",
    Contributor = "contributor",
    Member = "member"
}


export class GetSnippetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetSnippetsRoleEnum;
}


export class GetSnippetsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetSnippetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSnippetsQueryParams;

  @SpeakeasyMetadata()
  security: GetSnippetsSecurity;
}


export class GetSnippetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedSnippets?: shared.PaginatedSnippets;
}
