import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
    organizationName: string;
    senderName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    pathParams: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;
    request?: shared.SenderInput;
    security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    senders?: shared.Sender[];
    statusCode: number;
}
