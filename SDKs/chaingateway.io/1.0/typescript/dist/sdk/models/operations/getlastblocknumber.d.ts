import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLastBlockNumberHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class GetLastBlockNumberRequest extends SpeakeasyBase {
    headers: GetLastBlockNumberHeaders;
}
export declare class GetLastBlockNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastBlockNumber?: shared.GetLastBlockNumber;
}
