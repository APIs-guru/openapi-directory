import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContentproSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=terms" })
  terms: string;
}


export class GetContentproSearch200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=article" })
  article?: shared.Article;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: shared.ContentProCompany;

  @SpeakeasyMetadata({ data: "json, name=snippets" })
  snippets?: shared.ContentProSnippets;
}


export class GetContentproSearch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetContentproSearch200ApplicationJsonData })
  data?: GetContentproSearch200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetContentproSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContentproSearchQueryParams;
}


export class GetContentproSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentproSearch200ApplicationJsonObject?: GetContentproSearch200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
