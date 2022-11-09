import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyDeepsearchNamePathParams extends SpeakeasyBase {
    country: string;
    name: string;
}
export declare class CompanyDeepsearchNameSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyDeepsearchNameRequest extends SpeakeasyBase {
    pathParams: CompanyDeepsearchNamePathParams;
    security: CompanyDeepsearchNameSecurity;
}
export declare class CompanyDeepsearchNameResponse extends SpeakeasyBase {
    companyDeepsearchName200ApplicationJsonAnies?: any[];
    companyDeepsearchNameDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
