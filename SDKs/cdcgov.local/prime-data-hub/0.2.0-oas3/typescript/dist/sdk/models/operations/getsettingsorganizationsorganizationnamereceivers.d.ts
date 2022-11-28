import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsOrganizationNameReceiversPathParams extends SpeakeasyBase {
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversRequest extends SpeakeasyBase {
    pathParams: GetSettingsOrganizationsOrganizationNameReceiversPathParams;
    security: GetSettingsOrganizationsOrganizationNameReceiversSecurity;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversResponse extends SpeakeasyBase {
    contentType: string;
    receivers?: shared.Receiver[];
    statusCode: number;
}
