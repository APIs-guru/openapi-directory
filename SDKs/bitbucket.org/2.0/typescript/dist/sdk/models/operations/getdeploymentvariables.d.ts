import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeploymentVariablesPathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetDeploymentVariablesRequest extends SpeakeasyBase {
    pathParams: GetDeploymentVariablesPathParams;
}
export declare class GetDeploymentVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedDeploymentVariable?: shared.PaginatedDeploymentVariable;
}
