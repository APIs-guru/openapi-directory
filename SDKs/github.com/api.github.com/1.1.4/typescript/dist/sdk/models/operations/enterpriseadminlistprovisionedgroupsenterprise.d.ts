import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListProvisionedGroupsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams extends SpeakeasyBase {
    count?: number;
    excludedAttributes?: string;
    filter?: string;
    startIndex?: number;
}
export declare class EnterpriseAdminListProvisionedGroupsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListProvisionedGroupsEnterprisePathParams;
    queryParams: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
}
export declare class EnterpriseAdminListProvisionedGroupsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimGroupListEnterprise?: shared.ScimGroupListEnterprise;
}
