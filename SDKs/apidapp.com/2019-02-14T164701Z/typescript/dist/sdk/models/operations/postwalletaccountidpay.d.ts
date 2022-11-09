import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostWalletAccountIdPayPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostWalletAccountIdPayRequest extends SpeakeasyBase {
    pathParams: PostWalletAccountIdPayPathParams;
}
export declare class PostWalletAccountIdPayResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
