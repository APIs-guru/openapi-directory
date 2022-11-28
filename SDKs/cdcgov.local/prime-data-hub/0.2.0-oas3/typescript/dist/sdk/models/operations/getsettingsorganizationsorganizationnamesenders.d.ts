import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsOrganizationNameSendersPathParams extends SpeakeasyBase {
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersRequest extends SpeakeasyBase {
    pathParams: GetSettingsOrganizationsOrganizationNameSendersPathParams;
    security: GetSettingsOrganizationsOrganizationNameSendersSecurity;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersResponse extends SpeakeasyBase {
    contentType: string;
    senders?: shared.Sender[];
    statusCode: number;
}
