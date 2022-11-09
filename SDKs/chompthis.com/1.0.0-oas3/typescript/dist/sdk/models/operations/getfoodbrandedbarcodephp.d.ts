import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFoodBrandedBarcodePhpQueryParams extends SpeakeasyBase {
    code: string;
}
export declare class GetFoodBrandedBarcodePhpSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFoodBrandedBarcodePhpRequest extends SpeakeasyBase {
    queryParams: GetFoodBrandedBarcodePhpQueryParams;
    security: GetFoodBrandedBarcodePhpSecurity;
}
export declare class GetFoodBrandedBarcodePhpResponse extends SpeakeasyBase {
    brandedFoodObject?: shared.BrandedFoodObject;
    contentType: string;
    statusCode: number;
}
