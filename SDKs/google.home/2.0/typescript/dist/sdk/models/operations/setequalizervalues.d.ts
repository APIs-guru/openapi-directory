import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SetEqualizerValuesRequest extends SpeakeasyBase {
    request: shared.SetEqualizerValuesRequest;
}
export declare class SetEqualizerValuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
