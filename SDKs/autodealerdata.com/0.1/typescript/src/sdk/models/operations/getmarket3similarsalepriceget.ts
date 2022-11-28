import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarket3SimilarSalePriceGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sameYear" })
  sameYear?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetMarket3SimilarSalePriceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMarket3SimilarSalePriceGetQueryParams;
}


export class GetMarket3SimilarSalePriceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  similarSalePriceResp?: shared.SimilarSalePriceResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
