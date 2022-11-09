import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetProfilePathParams extends SpeakeasyBase {
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetProfileQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetProfileRequest extends SpeakeasyBase {
    pathParams: Destiny2GetProfilePathParams;
    queryParams: Destiny2GetProfileQueryParams;
}
export declare class Destiny2GetProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
