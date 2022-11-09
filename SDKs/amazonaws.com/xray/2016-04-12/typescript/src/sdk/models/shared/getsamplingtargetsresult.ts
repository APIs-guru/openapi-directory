import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SamplingTargetDocument } from "./samplingtargetdocument";
import { UnprocessedStatistics } from "./unprocessedstatistics";


export class GetSamplingTargetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastRuleModification" })
  lastRuleModification?: Date;

  @Metadata({ data: "json, name=SamplingTargetDocuments", elemType: shared.SamplingTargetDocument })
  samplingTargetDocuments?: SamplingTargetDocument[];

  @Metadata({ data: "json, name=UnprocessedStatistics", elemType: shared.UnprocessedStatistics })
  unprocessedStatistics?: UnprocessedStatistics[];
}
