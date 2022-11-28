import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesAcknowledgeNotificationSetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    notificationSetId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesAcknowledgeNotificationSetQueryParams;
    security: AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity;
}
export declare class AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
