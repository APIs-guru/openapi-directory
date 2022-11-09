import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyNotificationRegisterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyNotificationRegisterRequestBody extends SpeakeasyBase {
    callbackUrl: string;
}
export declare class CompanyNotificationRegisterSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyNotificationRegisterRequest extends SpeakeasyBase {
    pathParams: CompanyNotificationRegisterPathParams;
    request?: CompanyNotificationRegisterRequestBody;
    security: CompanyNotificationRegisterSecurity;
}
export declare class CompanyNotificationRegisterResponse extends SpeakeasyBase {
    companyNotificationRegister200ApplicationJsonAny?: any;
    companyNotificationRegisterDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
