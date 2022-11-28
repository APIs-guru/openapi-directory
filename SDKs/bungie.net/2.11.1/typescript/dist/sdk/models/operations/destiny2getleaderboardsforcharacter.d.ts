import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetLeaderboardsForCharacterPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetLeaderboardsForCharacterQueryParams extends SpeakeasyBase {
    maxtop?: number;
    modes?: string;
    statid?: string;
}
export declare class Destiny2GetLeaderboardsForCharacterRequest extends SpeakeasyBase {
    pathParams: Destiny2GetLeaderboardsForCharacterPathParams;
    queryParams: Destiny2GetLeaderboardsForCharacterQueryParams;
}
export declare class Destiny2GetLeaderboardsForCharacterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
