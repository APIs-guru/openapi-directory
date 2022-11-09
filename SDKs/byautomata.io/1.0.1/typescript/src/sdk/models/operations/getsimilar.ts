import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSimilarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=link" })
  link: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetSimilarRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSimilarQueryParams;
}


export class GetSimilar200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @Metadata({ data: "json, name=companies", elemType: shared.SimilarCompany })
  companies?: shared.SimilarCompany[];

  @Metadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @Metadata({ data: "json, name=input_company" })
  inputCompany?: shared.InputCompany;

  @Metadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class GetSimilarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSimilar200ApplicationJsonObject?: GetSimilar200ApplicationJson;

  @Metadata()
  statusCode: number;
}
