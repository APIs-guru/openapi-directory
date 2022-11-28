import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListDeployKeysPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListDeployKeysQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListDeployKeysRequest extends SpeakeasyBase {
    pathParams: ReposListDeployKeysPathParams;
    queryParams: ReposListDeployKeysQueryParams;
}
export declare class ReposListDeployKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deployKeys?: shared.DeployKey[];
}
