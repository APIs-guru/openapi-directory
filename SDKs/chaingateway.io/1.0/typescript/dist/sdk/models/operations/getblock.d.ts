import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetBlockRequest extends SpeakeasyBase {
    headers: GetBlockHeaders;
    request: shared.GetBlockRequest;
}
export declare class GetBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlock?: shared.GetBlock;
}
