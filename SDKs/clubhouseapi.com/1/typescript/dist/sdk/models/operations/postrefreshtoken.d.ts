import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostRefreshTokenRequest extends SpeakeasyBase {
    request?: Map<string, any>;
}
export declare class PostRefreshTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
