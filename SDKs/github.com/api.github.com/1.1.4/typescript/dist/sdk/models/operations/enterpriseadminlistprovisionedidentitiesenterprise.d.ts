import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams extends SpeakeasyBase {
    count?: number;
    filter?: string;
    startIndex?: number;
}
export declare class EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams;
    queryParams: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams;
}
export declare class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimUserListEnterprise?: shared.ScimUserListEnterprise;
}
