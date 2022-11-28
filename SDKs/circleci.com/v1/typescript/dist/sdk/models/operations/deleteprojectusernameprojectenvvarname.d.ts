import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
    name: string;
    project: string;
    username: string;
}
export declare enum DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum {
    Ok = "OK"
}
export declare class DeleteProjectUsernameProjectEnvvarName200ApplicationJson extends SpeakeasyBase {
    message?: DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum;
}
export declare class DeleteProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
    pathParams: DeleteProjectUsernameProjectEnvvarNamePathParams;
}
export declare class DeleteProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectUsernameProjectEnvvarName200ApplicationJsonObject?: DeleteProjectUsernameProjectEnvvarName200ApplicationJson;
    statusCode: number;
}
