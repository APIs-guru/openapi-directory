import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2InsertSocketPlugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2InsertSocketPlugRequest extends SpeakeasyBase {
    security: Destiny2InsertSocketPlugSecurity;
}
export declare class Destiny2InsertSocketPlugResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
