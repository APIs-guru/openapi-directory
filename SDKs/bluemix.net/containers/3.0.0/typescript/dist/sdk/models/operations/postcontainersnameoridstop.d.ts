import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdStopPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdStopQueryParams extends SpeakeasyBase {
    t?: number;
}
export declare class PostContainersNameOrIdStopHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdStopRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdStopPathParams;
    queryParams: PostContainersNameOrIdStopQueryParams;
    headers: PostContainersNameOrIdStopHeaders;
}
export declare class PostContainersNameOrIdStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
