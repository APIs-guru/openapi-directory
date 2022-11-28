import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProjectUsernameProjectBuildCachePathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class DeleteProjectUsernameProjectBuildCache200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class DeleteProjectUsernameProjectBuildCacheRequest extends SpeakeasyBase {
    pathParams: DeleteProjectUsernameProjectBuildCachePathParams;
}
export declare class DeleteProjectUsernameProjectBuildCacheResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectUsernameProjectBuildCache200ApplicationJsonObject?: DeleteProjectUsernameProjectBuildCache200ApplicationJson;
    statusCode: number;
}
