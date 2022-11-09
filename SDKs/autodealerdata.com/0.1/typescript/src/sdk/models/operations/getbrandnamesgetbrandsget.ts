import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBrandNamesGetBrandsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetBrandNamesGetBrandsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBrandNamesGetBrandsGetQueryParams;
}


export class GetBrandNamesGetBrandsGetResponse extends SpeakeasyBase {
  @Metadata()
  brandResp?: shared.BrandResp;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
