import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyNotificationUnregisterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyNotificationUnregisterSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyNotificationUnregisterRequest extends SpeakeasyBase {
    pathParams: CompanyNotificationUnregisterPathParams;
    security: CompanyNotificationUnregisterSecurity;
}
export declare class CompanyNotificationUnregisterResponse extends SpeakeasyBase {
    companyNotificationUnregisterDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
