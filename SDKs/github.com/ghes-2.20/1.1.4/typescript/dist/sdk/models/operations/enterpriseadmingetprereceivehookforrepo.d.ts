import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetPreReceiveHookForRepoPathParams extends SpeakeasyBase {
    owner: string;
    preReceiveHookId: number;
    repo: string;
}
export declare class EnterpriseAdminGetPreReceiveHookForRepoRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetPreReceiveHookForRepoPathParams;
}
export declare class EnterpriseAdminGetPreReceiveHookForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
