import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CrmCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class CrmCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sale_date" })
  saleDate: string;
}


export class CrmCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CrmCheckPathParams;

  @Metadata()
  queryParams: CrmCheckQueryParams;
}


export class CrmCheckResponse extends SpeakeasyBase {
  @Metadata()
  crmResponse?: shared.CrmResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
