import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensesGetAllCommonlyUsedQueryParams extends SpeakeasyBase {
    featured?: boolean;
    page?: number;
    perPage?: number;
}
export declare class LicensesGetAllCommonlyUsedRequest extends SpeakeasyBase {
    queryParams: LicensesGetAllCommonlyUsedQueryParams;
}
export declare class LicensesGetAllCommonlyUsedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    licenseSimples?: shared.LicenseSimple[];
}
