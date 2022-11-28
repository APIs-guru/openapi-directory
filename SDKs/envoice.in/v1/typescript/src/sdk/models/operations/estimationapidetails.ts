import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EstimationApiDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: EstimationApiDetailsHeaders;
}


export class EstimationApiDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
