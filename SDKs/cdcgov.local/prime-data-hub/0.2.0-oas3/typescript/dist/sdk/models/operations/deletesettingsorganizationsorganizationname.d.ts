import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
    organizationName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    pathParams: DeleteSettingsOrganizationsOrganizationNamePathParams;
    security: DeleteSettingsOrganizationsOrganizationNameSecurity;
}
export declare class DeleteSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
