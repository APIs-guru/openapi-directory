import { SpeakeasyBase } from "../../../internal/utils";
import { SamplingTargetDocument } from "./samplingtargetdocument";
import { UnprocessedStatistics } from "./unprocessedstatistics";
export declare class GetSamplingTargetsResult extends SpeakeasyBase {
    lastRuleModification?: Date;
    samplingTargetDocuments?: SamplingTargetDocument[];
    unprocessedStatistics?: UnprocessedStatistics[];
}
