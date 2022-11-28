import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
    organizationName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    pathParams: PutSettingsOrganizationsOrganizationNamePathParams;
    request?: shared.Organization1;
    security: PutSettingsOrganizationsOrganizationNameSecurity;
}
export declare class PutSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
