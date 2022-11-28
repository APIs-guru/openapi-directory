import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFrequencyTypeEnum } from "./reportfrequencytypeenum";
/**
 * Details on how frequently reports are generated.
**/
export declare class ReportFrequency extends SpeakeasyBase {
    period?: ReportFrequencyTypeEnum;
    value?: number;
}
