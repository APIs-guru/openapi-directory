import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAppsWithAccessToProtectedBranchPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetAppsWithAccessToProtectedBranchRequest extends SpeakeasyBase {
    pathParams: ReposGetAppsWithAccessToProtectedBranchPathParams;
}
export declare class ReposGetAppsWithAccessToProtectedBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    integrations?: Map<string, any>[];
}
