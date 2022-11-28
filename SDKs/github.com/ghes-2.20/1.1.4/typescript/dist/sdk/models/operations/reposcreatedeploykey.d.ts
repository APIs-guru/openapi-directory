import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateDeployKeyPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposCreateDeployKeyRequestBody extends SpeakeasyBase {
    key: string;
    readOnly?: boolean;
    title?: string;
}
export declare class ReposCreateDeployKeyRequest extends SpeakeasyBase {
    pathParams: ReposCreateDeployKeyPathParams;
    request?: ReposCreateDeployKeyRequestBody;
}
export declare class ReposCreateDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deployKey?: shared.DeployKey;
    validationError?: shared.ValidationError;
}
