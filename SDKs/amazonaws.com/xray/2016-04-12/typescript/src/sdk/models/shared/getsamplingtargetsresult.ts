import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamplingTargetDocument } from "./samplingtargetdocument";
import { UnprocessedStatistics } from "./unprocessedstatistics";



export class GetSamplingTargetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastRuleModification" })
  lastRuleModification?: Date;

  @SpeakeasyMetadata({ data: "json, name=SamplingTargetDocuments", elemType: SamplingTargetDocument })
  samplingTargetDocuments?: SamplingTargetDocument[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedStatistics", elemType: UnprocessedStatistics })
  unprocessedStatistics?: UnprocessedStatistics[];
}
