import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateOrgRequestBody extends SpeakeasyBase {
    admin: string;
    login: string;
    profileName?: string;
}
export declare class EnterpriseAdminCreateOrgRequest extends SpeakeasyBase {
    request?: EnterpriseAdminCreateOrgRequestBody;
}
export declare class EnterpriseAdminCreateOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    organizationSimple?: shared.OrganizationSimple;
}
