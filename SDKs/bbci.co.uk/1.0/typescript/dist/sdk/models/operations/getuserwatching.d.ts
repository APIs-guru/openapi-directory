import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetUserWatchingQueryParams extends SpeakeasyBase {
    identityCookie: number;
}
export declare class GetUserWatchingRequest extends SpeakeasyBase {
    queryParams: GetUserWatchingQueryParams;
}
export declare class GetUserWatchingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
