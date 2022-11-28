import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanySearchNumberPathParams extends SpeakeasyBase {
    country: string;
    number: string;
}
export declare class CompanySearchNumberQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class CompanySearchNumberSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanySearchNumberRequest extends SpeakeasyBase {
    pathParams: CompanySearchNumberPathParams;
    queryParams: CompanySearchNumberQueryParams;
    security: CompanySearchNumberSecurity;
}
export declare class CompanySearchNumberResponse extends SpeakeasyBase {
    companySearchNumber200ApplicationJsonAnies?: any[];
    companySearchNumberDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
