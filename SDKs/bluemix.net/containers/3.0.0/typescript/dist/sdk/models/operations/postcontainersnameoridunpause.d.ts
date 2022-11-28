import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdUnpausePathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdUnpauseHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdUnpauseRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdUnpausePathParams;
    headers: PostContainersNameOrIdUnpauseHeaders;
}
export declare class PostContainersNameOrIdUnpauseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
