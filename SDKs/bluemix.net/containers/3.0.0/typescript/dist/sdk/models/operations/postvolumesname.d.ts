import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PostVolumesNameHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostVolumesNameRequest extends SpeakeasyBase {
    pathParams: PostVolumesNamePathParams;
    headers: PostVolumesNameHeaders;
    request: any;
}
export declare class PostVolumesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: any;
}
