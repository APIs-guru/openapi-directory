import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SystemPricelistSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class SystemPricelistRequest extends SpeakeasyBase {
    security: SystemPricelistSecurity;
}
export declare class SystemPricelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemPricelist200ApplicationJsonAnies?: any[];
    systemPricelistDefaultApplicationJsonAny?: any;
}
