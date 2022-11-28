import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectBuildNumCancelPathParams extends SpeakeasyBase {
    buildNum: number;
    project: string;
    username: string;
}
export declare class PostProjectUsernameProjectBuildNumCancelRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectBuildNumCancelPathParams;
}
export declare class PostProjectUsernameProjectBuildNumCancelResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    statusCode: number;
}
