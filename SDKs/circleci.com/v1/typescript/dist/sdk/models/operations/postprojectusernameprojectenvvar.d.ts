import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class PostProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectEnvvarPathParams;
}
export declare class PostProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
    contentType: string;
    envvar?: shared.Envvar;
    statusCode: number;
}
