import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBundlesIdSharePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostBundlesIdShareRequestBody extends SpeakeasyBase {
    note?: string;
    recipients?: Map<string, any>[];
    to?: string[];
}
export declare class PostBundlesIdShareRequest extends SpeakeasyBase {
    pathParams: PostBundlesIdSharePathParams;
    request?: PostBundlesIdShareRequestBody;
}
export declare class PostBundlesIdShareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
