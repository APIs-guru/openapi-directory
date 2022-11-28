import { SpeakeasyBase } from "../../../internal/utils";
import { HighShelf } from "./highshelf";
import { LowShelf } from "./lowshelf";
export declare class UserEq extends SpeakeasyBase {
    highShelf: HighShelf;
    lowShelf: LowShelf;
    maxPeakingEqs: number;
    peakingEqs: string[];
}
