import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteDeployKeyPathParams extends SpeakeasyBase {
    keyId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteDeployKeyRequest extends SpeakeasyBase {
    pathParams: ReposDeleteDeployKeyPathParams;
}
export declare class ReposDeleteDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
