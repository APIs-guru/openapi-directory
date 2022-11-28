import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBuildQueryParams extends SpeakeasyBase {
    nocache?: boolean;
    pull?: boolean;
    q?: boolean;
    t: string;
}
export declare class PostBuildHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostBuildRequest extends SpeakeasyBase {
    queryParams: PostBuildQueryParams;
    headers: PostBuildHeaders;
    request: Uint8Array;
}
export declare class PostBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
