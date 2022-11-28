import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminSetAllowedActionsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminSetAllowedActionsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetAllowedActionsEnterprisePathParams;
    request?: shared.SelectedActions;
}
export declare class EnterpriseAdminSetAllowedActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
