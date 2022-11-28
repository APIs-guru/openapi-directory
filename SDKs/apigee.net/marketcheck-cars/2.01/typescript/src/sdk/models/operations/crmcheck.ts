import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CrmCheckPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class CrmCheckQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sale_date" })
  saleDate: string;
}


export class CrmCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CrmCheckPathParams;

  @SpeakeasyMetadata()
  queryParams: CrmCheckQueryParams;
}


export class CrmCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  crmResponse?: shared.CrmResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
