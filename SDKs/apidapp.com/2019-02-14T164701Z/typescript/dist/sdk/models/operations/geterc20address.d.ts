import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetErc20AddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetErc20AddressRequest extends SpeakeasyBase {
    pathParams: GetErc20AddressPathParams;
}
export declare class GetErc20AddressResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
