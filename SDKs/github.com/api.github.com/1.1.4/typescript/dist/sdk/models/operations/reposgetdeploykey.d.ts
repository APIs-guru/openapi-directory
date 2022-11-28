import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetDeployKeyPathParams extends SpeakeasyBase {
    keyId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetDeployKeyRequest extends SpeakeasyBase {
    pathParams: ReposGetDeployKeyPathParams;
}
export declare class ReposGetDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    deployKey?: shared.DeployKey;
}
