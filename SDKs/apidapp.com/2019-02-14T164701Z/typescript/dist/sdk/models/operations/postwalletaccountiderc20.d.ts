import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostWalletAccountIdErc20PathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostWalletAccountIdErc20Request extends SpeakeasyBase {
    pathParams: PostWalletAccountIdErc20PathParams;
}
export declare class PostWalletAccountIdErc20Response extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
