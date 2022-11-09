import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBrandNamesGetBrandsGetQueryParams extends SpeakeasyBase {
    jwt: string;
}
export declare class GetBrandNamesGetBrandsGetRequest extends SpeakeasyBase {
    queryParams: GetBrandNamesGetBrandsGetQueryParams;
}
export declare class GetBrandNamesGetBrandsGetResponse extends SpeakeasyBase {
    brandResp?: shared.BrandResp;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
