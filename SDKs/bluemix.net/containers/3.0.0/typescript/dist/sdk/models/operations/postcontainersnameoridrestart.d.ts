import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostContainersNameOrIdRestartPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdRestartQueryParams extends SpeakeasyBase {
    t?: number;
}
export declare class PostContainersNameOrIdRestartHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdRestartRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdRestartPathParams;
    queryParams: PostContainersNameOrIdRestartQueryParams;
    headers: PostContainersNameOrIdRestartHeaders;
}
export declare class PostContainersNameOrIdRestartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
