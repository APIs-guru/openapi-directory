import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockIdTransactionIndexPathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class GetBlockIdTransactionIndexSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockIdTransactionIndexRequest extends SpeakeasyBase {
    pathParams: GetBlockIdTransactionIndexPathParams;
    security: GetBlockIdTransactionIndexSecurity;
}
export declare class GetBlockIdTransactionIndexResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
