import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const AirtravelMultilegServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class AirtravelMultilegRequest extends SpeakeasyBase {
    serverUrl?: string;
    request: shared.AirtravelMultilegRequest;
}
export declare class AirtravelMultilegResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
