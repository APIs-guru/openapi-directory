import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetUniqueWeaponHistoryPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetUniqueWeaponHistoryRequest extends SpeakeasyBase {
    pathParams: Destiny2GetUniqueWeaponHistoryPathParams;
}
export declare class Destiny2GetUniqueWeaponHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
