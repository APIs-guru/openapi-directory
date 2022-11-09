import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetModelSaleBucketsSalePriceHistogramGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetModelSaleBucketsSalePriceHistogramGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModelSaleBucketsSalePriceHistogramGetQueryParams;
}


export class GetModelSaleBucketsSalePriceHistogramGetResponse extends SpeakeasyBase {
  @Metadata()
  bucketResp?: shared.BucketResp;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
