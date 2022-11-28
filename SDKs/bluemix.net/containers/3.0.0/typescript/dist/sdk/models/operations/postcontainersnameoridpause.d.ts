import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdPausePathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdPauseHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdPauseRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdPausePathParams;
    headers: PostContainersNameOrIdPauseHeaders;
}
export declare class PostContainersNameOrIdPauseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
