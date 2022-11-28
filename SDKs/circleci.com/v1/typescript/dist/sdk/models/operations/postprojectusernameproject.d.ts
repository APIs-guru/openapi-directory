import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class PostProjectUsernameProjectRequestBody extends SpeakeasyBase {
    buildParameters?: Map<string, any>;
    parallel?: string;
    revision?: string;
    tag?: string;
}
export declare class PostProjectUsernameProjectRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectPathParams;
    request?: PostProjectUsernameProjectRequestBody;
}
export declare class PostProjectUsernameProjectResponse extends SpeakeasyBase {
    buildSummary?: shared.BuildSummary;
    contentType: string;
    statusCode: number;
}
