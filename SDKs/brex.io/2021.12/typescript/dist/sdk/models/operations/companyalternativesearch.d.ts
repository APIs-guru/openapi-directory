import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyAlternativeSearchPathParams extends SpeakeasyBase {
    country: string;
}
export declare class CompanyAlternativeSearchRequestBody extends SpeakeasyBase {
    address?: string;
    name?: string;
    number?: string;
    phone?: string;
    url?: string;
    vat?: string;
}
export declare class CompanyAlternativeSearchSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyAlternativeSearchRequest extends SpeakeasyBase {
    pathParams: CompanyAlternativeSearchPathParams;
    request?: CompanyAlternativeSearchRequestBody;
    security: CompanyAlternativeSearchSecurity;
}
export declare class CompanyAlternativeSearchResponse extends SpeakeasyBase {
    companyAlternativeSearch200ApplicationJsonAnies?: any[];
    companyAlternativeSearchDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
