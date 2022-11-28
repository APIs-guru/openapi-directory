import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
    name: string;
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectEnvvarNamePathParams;
}
export declare class GetProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
    contentType: string;
    envvar?: shared.Envvar;
    statusCode: number;
}
