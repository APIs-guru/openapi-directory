import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class EstimationApiAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EstimationApiAllQueryParams;

  @SpeakeasyMetadata()
  headers: EstimationApiAllHeaders;
}


export class EstimationApiAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResultEstimationDetailsApiModel?: shared.ListResultEstimationDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
