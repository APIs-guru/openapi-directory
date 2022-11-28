import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetCollectibleNodeDetailsPathParams extends SpeakeasyBase {
    characterId: number;
    collectiblePresentationNodeHash: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetCollectibleNodeDetailsQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetCollectibleNodeDetailsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetCollectibleNodeDetailsPathParams;
    queryParams: Destiny2GetCollectibleNodeDetailsQueryParams;
}
export declare class Destiny2GetCollectibleNodeDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
