import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostVolumesCreateQueryParams extends SpeakeasyBase {
    fsName?: string;
    name: string;
}
export declare class PostVolumesCreateHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostVolumesCreateRequest extends SpeakeasyBase {
    queryParams: PostVolumesCreateQueryParams;
    headers: PostVolumesCreateHeaders;
}
export declare class PostVolumesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: any;
}
