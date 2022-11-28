import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetModelSaleBucketsSalePriceHistogramGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetModelSaleBucketsSalePriceHistogramGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelSaleBucketsSalePriceHistogramGetQueryParams;
}


export class GetModelSaleBucketsSalePriceHistogramGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucketResp?: shared.BucketResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
