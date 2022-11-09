import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=terms" })
  terms: string;
}


export class GetSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchQueryParams;
}


export class GetSearch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @Metadata({ data: "json, name=companies", elemType: shared.SimilarCompanySearch })
  companies?: shared.SimilarCompanySearch[];

  @Metadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @Metadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSearch200ApplicationJsonObject?: GetSearch200ApplicationJson;

  @Metadata()
  statusCode: number;
}
