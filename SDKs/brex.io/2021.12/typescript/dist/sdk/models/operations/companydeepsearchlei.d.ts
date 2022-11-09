import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyDeepsearchLeiPathParams extends SpeakeasyBase {
    number: string;
}
export declare class CompanyDeepsearchLeiQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class CompanyDeepsearchLeiSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyDeepsearchLeiRequest extends SpeakeasyBase {
    pathParams: CompanyDeepsearchLeiPathParams;
    queryParams: CompanyDeepsearchLeiQueryParams;
    security: CompanyDeepsearchLeiSecurity;
}
export declare class CompanyDeepsearchLeiResponse extends SpeakeasyBase {
    companyDeepsearchLei200ApplicationJsonAny?: any;
    companyDeepsearchLeiDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
