import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContentproSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=terms" })
  terms: string;
}


export class GetContentproSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContentproSearchQueryParams;
}


export class GetContentproSearch200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=article" })
  article?: shared.Article;

  @Metadata({ data: "json, name=company" })
  company?: shared.ContentProCompany;

  @Metadata({ data: "json, name=snippets" })
  snippets?: shared.ContentProSnippets;
}


export class GetContentproSearch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @Metadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @Metadata({ data: "json, name=data", elemType: operations.GetContentproSearch200ApplicationJsonData })
  data?: GetContentproSearch200ApplicationJsonData[];

  @Metadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetContentproSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentproSearch200ApplicationJsonObject?: GetContentproSearch200ApplicationJson;

  @Metadata()
  statusCode: number;
}
