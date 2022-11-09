import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyDeepsearchIsinRequestBody extends SpeakeasyBase {
    isin?: string;
}
export declare class CompanyDeepsearchIsinSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyDeepsearchIsinRequest extends SpeakeasyBase {
    request?: CompanyDeepsearchIsinRequestBody;
    security: CompanyDeepsearchIsinSecurity;
}
export declare class CompanyDeepsearchIsinResponse extends SpeakeasyBase {
    companyDeepsearchIsin200ApplicationJsonAnies?: any[];
    companyDeepsearchIsinDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
