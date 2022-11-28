import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdStartPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdStartHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdStartRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdStartPathParams;
    headers: PostContainersNameOrIdStartHeaders;
}
export declare class PostContainersNameOrIdStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
