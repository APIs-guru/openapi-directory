import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetDestinyAggregateActivityStatsPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetDestinyAggregateActivityStatsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetDestinyAggregateActivityStatsPathParams;
}
export declare class Destiny2GetDestinyAggregateActivityStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
