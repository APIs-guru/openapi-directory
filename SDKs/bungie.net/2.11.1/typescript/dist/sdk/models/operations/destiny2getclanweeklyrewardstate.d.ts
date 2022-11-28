import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetClanWeeklyRewardStatePathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class Destiny2GetClanWeeklyRewardStateRequest extends SpeakeasyBase {
    pathParams: Destiny2GetClanWeeklyRewardStatePathParams;
}
export declare class Destiny2GetClanWeeklyRewardStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
