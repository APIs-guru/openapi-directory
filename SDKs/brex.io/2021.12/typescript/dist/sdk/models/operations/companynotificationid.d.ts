import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyNotificationIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyNotificationIdSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyNotificationIdRequest extends SpeakeasyBase {
    pathParams: CompanyNotificationIdPathParams;
    security: CompanyNotificationIdSecurity;
}
export declare class CompanyNotificationIdResponse extends SpeakeasyBase {
    companyNotificationId200ApplicationJsonAnies?: any[];
    companyNotificationIdDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
