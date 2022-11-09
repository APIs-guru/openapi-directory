import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2EquipItemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2EquipItemRequest extends SpeakeasyBase {
    security: Destiny2EquipItemSecurity;
}
export declare class Destiny2EquipItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
