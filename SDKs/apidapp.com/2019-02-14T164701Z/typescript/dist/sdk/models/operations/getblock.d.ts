import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockRequest extends SpeakeasyBase {
    security: GetBlockSecurity;
}
export declare class GetBlockResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
