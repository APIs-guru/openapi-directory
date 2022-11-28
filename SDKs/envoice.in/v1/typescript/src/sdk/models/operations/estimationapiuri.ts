import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EstimationApiUriQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiUriHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EstimationApiUriQueryParams;

  @SpeakeasyMetadata()
  headers: EstimationApiUriHeaders;
}


export class EstimationApiUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationUriApiModel?: shared.EstimationUriApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
