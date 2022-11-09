import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMarket3SimilarSalePriceGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sameYear" })
  sameYear?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetMarket3SimilarSalePriceGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMarket3SimilarSalePriceGetQueryParams;
}


export class GetMarket3SimilarSalePriceGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  similarSalePriceResp?: shared.SimilarSalePriceResp;

  @Metadata()
  statusCode: number;
}
