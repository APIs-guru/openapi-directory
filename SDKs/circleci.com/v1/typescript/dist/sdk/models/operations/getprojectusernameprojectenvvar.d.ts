import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectEnvvarPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectEnvvarPathParams;
}
export declare class GetProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
    contentType: string;
    envvars?: shared.Envvar[];
    statusCode: number;
}
