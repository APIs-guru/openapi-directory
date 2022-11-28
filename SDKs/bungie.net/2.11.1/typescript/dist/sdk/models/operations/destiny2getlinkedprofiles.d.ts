import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetLinkedProfilesPathParams extends SpeakeasyBase {
    membershipId: number;
    membershipType: number;
}
export declare class Destiny2GetLinkedProfilesQueryParams extends SpeakeasyBase {
    getAllMemberships?: boolean;
}
export declare class Destiny2GetLinkedProfilesRequest extends SpeakeasyBase {
    pathParams: Destiny2GetLinkedProfilesPathParams;
    queryParams: Destiny2GetLinkedProfilesQueryParams;
}
export declare class Destiny2GetLinkedProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
