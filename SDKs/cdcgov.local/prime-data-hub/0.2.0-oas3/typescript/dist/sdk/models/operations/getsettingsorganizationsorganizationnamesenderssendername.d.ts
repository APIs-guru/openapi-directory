import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
    organizationName: string;
    senderName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    pathParams: GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;
    security: GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    sender?: shared.Sender;
    statusCode: number;
}
