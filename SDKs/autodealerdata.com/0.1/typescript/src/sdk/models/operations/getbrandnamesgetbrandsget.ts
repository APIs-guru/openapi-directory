import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBrandNamesGetBrandsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetBrandNamesGetBrandsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBrandNamesGetBrandsGetQueryParams;
}


export class GetBrandNamesGetBrandsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  brandResp?: shared.BrandResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
