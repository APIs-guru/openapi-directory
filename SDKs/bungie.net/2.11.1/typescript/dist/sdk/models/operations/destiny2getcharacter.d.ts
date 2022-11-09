import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetCharacterPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetCharacterQueryParams extends SpeakeasyBase {
    components?: number[];
}
export declare class Destiny2GetCharacterRequest extends SpeakeasyBase {
    pathParams: Destiny2GetCharacterPathParams;
    queryParams: Destiny2GetCharacterQueryParams;
}
export declare class Destiny2GetCharacterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
