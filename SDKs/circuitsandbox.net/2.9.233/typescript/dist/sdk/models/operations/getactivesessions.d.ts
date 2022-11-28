import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActiveSessionsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetActiveSessionsRequest extends SpeakeasyBase {
    security: GetActiveSessionsSecurity;
}
export declare class GetActiveSessionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
