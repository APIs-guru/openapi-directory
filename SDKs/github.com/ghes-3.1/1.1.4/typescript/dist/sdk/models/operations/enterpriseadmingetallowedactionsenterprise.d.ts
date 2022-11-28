import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetAllowedActionsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminGetAllowedActionsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetAllowedActionsEnterprisePathParams;
}
export declare class EnterpriseAdminGetAllowedActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    selectedActions?: shared.SelectedActions;
}
