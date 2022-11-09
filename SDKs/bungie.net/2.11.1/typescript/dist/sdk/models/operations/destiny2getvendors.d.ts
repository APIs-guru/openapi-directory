import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetVendorsPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetVendorsQueryParams extends SpeakeasyBase {
    components?: number[];
    filter?: number;
}
export declare class Destiny2GetVendorsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetVendorsPathParams;
    queryParams: Destiny2GetVendorsQueryParams;
}
export declare class Destiny2GetVendorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
