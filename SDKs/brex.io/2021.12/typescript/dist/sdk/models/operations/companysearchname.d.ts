import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanySearchNamePathParams extends SpeakeasyBase {
    country: string;
    name: string;
}
export declare class CompanySearchNameQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class CompanySearchNameSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanySearchNameRequest extends SpeakeasyBase {
    pathParams: CompanySearchNamePathParams;
    queryParams: CompanySearchNameQueryParams;
    security: CompanySearchNameSecurity;
}
export declare class CompanySearchNameResponse extends SpeakeasyBase {
    companySearchName200ApplicationJsonAnies?: any[];
    companySearchNameDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
