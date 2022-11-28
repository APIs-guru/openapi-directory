import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostErc20AddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class PostErc20AddressRequest extends SpeakeasyBase {
    pathParams: PostErc20AddressPathParams;
}
export declare class PostErc20AddressResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
