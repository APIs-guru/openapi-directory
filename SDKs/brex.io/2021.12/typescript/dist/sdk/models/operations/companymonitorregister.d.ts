import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyMonitorRegisterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyMonitorRegisterRequestBody extends SpeakeasyBase {
    callbackUrl: string;
    changeType: string;
}
export declare class CompanyMonitorRegisterSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyMonitorRegisterRequest extends SpeakeasyBase {
    pathParams: CompanyMonitorRegisterPathParams;
    request?: CompanyMonitorRegisterRequestBody;
    security: CompanyMonitorRegisterSecurity;
}
export declare class CompanyMonitorRegisterResponse extends SpeakeasyBase {
    companyMonitorRegister200ApplicationJsonAny?: any;
    companyMonitorRegisterDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
