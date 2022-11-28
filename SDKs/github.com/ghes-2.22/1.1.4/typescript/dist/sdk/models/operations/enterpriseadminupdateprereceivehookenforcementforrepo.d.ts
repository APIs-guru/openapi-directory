import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams extends SpeakeasyBase {
    owner: string;
    preReceiveHookId: number;
    repo: string;
}
export declare enum EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Testing = "testing"
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody extends SpeakeasyBase {
    enforcement?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams;
    request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
