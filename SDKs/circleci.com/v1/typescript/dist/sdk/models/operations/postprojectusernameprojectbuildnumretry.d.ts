import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectBuildNumRetryPathParams extends SpeakeasyBase {
    buildNum: number;
    project: string;
    username: string;
}
export declare class PostProjectUsernameProjectBuildNumRetryRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectBuildNumRetryPathParams;
}
export declare class PostProjectUsernameProjectBuildNumRetryResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    statusCode: number;
}
