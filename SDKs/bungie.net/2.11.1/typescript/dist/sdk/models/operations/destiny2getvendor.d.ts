import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetVendorPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
    vendorHash: number;
}
export declare class Destiny2GetVendorQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetVendorRequest extends SpeakeasyBase {
    pathParams: Destiny2GetVendorPathParams;
    queryParams: Destiny2GetVendorQueryParams;
}
export declare class Destiny2GetVendorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
