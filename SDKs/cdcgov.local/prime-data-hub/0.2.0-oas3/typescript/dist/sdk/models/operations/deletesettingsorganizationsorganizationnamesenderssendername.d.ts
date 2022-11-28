import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
    organizationName: string;
    senderName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    pathParams: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;
    security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    sender?: shared.Sender;
    statusCode: number;
}
