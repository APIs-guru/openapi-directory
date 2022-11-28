import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    pathParams: GetSettingsOrganizationsOrganizationNamePathParams;
    security: GetSettingsOrganizationsOrganizationNameSecurity;
}
export declare class GetSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
