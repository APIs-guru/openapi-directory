import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
