import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostWalletAccountIdContractPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostWalletAccountIdContractRequest extends SpeakeasyBase {
    pathParams: PostWalletAccountIdContractPathParams;
}
export declare class PostWalletAccountIdContractResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
