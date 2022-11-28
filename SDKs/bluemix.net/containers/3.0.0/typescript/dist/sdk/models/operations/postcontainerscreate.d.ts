import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersCreateQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class PostContainersCreateHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersCreateRequest extends SpeakeasyBase {
    queryParams: PostContainersCreateQueryParams;
    headers: PostContainersCreateHeaders;
    request: any;
}
export declare class PostContainersCreateResponse extends SpeakeasyBase {
    containerId?: any;
    contentType: string;
    statusCode: number;
}
