import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetItemPathParams extends SpeakeasyBase {
    destinyMembershipId: number;
    itemInstanceId: number;
    membershipType: number;
}
export declare class Destiny2GetItemQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetItemRequest extends SpeakeasyBase {
    pathParams: Destiny2GetItemPathParams;
    queryParams: Destiny2GetItemQueryParams;
}
export declare class Destiny2GetItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
