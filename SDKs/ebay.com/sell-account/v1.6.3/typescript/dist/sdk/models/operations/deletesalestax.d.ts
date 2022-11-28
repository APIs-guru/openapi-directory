import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSalesTaxPathParams extends SpeakeasyBase {
    countryCode: string;
    jurisdictionId: string;
}
export declare class DeleteSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteSalesTaxRequest extends SpeakeasyBase {
    pathParams: DeleteSalesTaxPathParams;
    security: DeleteSalesTaxSecurity;
}
export declare class DeleteSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
