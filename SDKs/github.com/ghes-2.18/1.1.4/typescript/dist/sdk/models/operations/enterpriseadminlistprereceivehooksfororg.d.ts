import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPreReceiveHooksForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum EnterpriseAdminListPreReceiveHooksForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListPreReceiveHooksForOrgPathParams;
    queryParams: EnterpriseAdminListPreReceiveHooksForOrgQueryParams;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgPreReceiveHooks?: shared.OrgPreReceiveHook[];
}
