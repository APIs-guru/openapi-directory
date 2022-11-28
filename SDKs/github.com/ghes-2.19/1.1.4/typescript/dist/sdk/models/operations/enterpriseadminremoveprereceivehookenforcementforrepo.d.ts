import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams extends SpeakeasyBase {
    owner: string;
    preReceiveHookId: number;
    repo: string;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
