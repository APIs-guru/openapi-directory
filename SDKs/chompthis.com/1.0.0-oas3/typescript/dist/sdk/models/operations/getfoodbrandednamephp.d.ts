import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFoodBrandedNamePhpQueryParams extends SpeakeasyBase {
    limit?: number;
    name: string;
    page?: number;
}
export declare class GetFoodBrandedNamePhpSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFoodBrandedNamePhpRequest extends SpeakeasyBase {
    queryParams: GetFoodBrandedNamePhpQueryParams;
    security: GetFoodBrandedNamePhpSecurity;
}
export declare class GetFoodBrandedNamePhpResponse extends SpeakeasyBase {
    brandedFoodObject?: shared.BrandedFoodObject;
    contentType: string;
    statusCode: number;
}
