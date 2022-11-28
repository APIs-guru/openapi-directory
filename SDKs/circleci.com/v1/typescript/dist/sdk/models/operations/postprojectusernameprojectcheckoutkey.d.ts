import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectCheckoutKeyPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare enum PostProjectUsernameProjectCheckoutKeyRequestBodyEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}
export declare class PostProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectCheckoutKeyPathParams;
    request?: PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;
}
export declare class PostProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
    contentType: string;
    key?: shared.Key;
    statusCode: number;
}
