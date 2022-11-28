import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PairwithSpeakerRequest extends SpeakeasyBase {
    request: shared.PairwithSpeakerRequest;
}
export declare class PairwithSpeakerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
