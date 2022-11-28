import { SpeakeasyBase } from "../../../internal/utils";
import { ComparedFace } from "./comparedface";
import { KnownGender } from "./knowngender";
/**
 * Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
**/
export declare class Celebrity extends SpeakeasyBase {
    face?: ComparedFace;
    id?: string;
    knownGender?: KnownGender;
    matchConfidence?: number;
    name?: string;
    urls?: string[];
}
