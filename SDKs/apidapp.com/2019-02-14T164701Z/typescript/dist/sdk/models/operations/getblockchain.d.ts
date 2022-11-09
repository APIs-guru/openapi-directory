import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockchainSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockchainRequest extends SpeakeasyBase {
    security: GetBlockchainSecurity;
}
export declare class GetBlockchainResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
