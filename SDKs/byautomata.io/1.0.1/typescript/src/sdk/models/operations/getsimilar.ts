import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSimilarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetSimilar200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=companies", elemType: shared.SimilarCompany })
  companies?: shared.SimilarCompany[];

  @SpeakeasyMetadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=input_company" })
  inputCompany?: shared.InputCompany;

  @SpeakeasyMetadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetSimilarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSimilarQueryParams;
}


export class GetSimilarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSimilar200ApplicationJsonObject?: GetSimilar200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
