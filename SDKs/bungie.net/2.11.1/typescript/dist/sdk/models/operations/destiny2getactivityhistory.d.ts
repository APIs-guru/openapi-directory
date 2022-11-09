import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetActivityHistoryPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetActivityHistoryQueryParams extends SpeakeasyBase {
    count?: number;
    mode?: number;
    page?: number;
}
export declare class Destiny2GetActivityHistoryRequest extends SpeakeasyBase {
    pathParams: Destiny2GetActivityHistoryPathParams;
    queryParams: Destiny2GetActivityHistoryQueryParams;
}
export declare class Destiny2GetActivityHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
