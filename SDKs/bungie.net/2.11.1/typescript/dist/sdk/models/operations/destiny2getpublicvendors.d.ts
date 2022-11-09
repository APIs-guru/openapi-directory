import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetPublicVendorsQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetPublicVendorsRequest extends SpeakeasyBase {
    queryParams: Destiny2GetPublicVendorsQueryParams;
}
export declare class Destiny2GetPublicVendorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
