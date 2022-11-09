import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockIdTransactionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBlockIdTransactionSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockIdTransactionRequest extends SpeakeasyBase {
    pathParams: GetBlockIdTransactionPathParams;
    security: GetBlockIdTransactionSecurity;
}
export declare class GetBlockIdTransactionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
