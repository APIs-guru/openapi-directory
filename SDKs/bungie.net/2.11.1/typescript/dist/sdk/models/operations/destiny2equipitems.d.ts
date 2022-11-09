import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2EquipItemsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2EquipItemsRequest extends SpeakeasyBase {
    security: Destiny2EquipItemsSecurity;
}
export declare class Destiny2EquipItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
