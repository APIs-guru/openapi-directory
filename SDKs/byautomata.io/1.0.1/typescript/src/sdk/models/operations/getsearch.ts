import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=terms" })
  terms: string;
}


export class GetSearch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=companies", elemType: shared.SimilarCompanySearch })
  companies?: shared.SimilarCompanySearch[];

  @SpeakeasyMetadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchQueryParams;
}


export class GetSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSearch200ApplicationJsonObject?: GetSearch200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
