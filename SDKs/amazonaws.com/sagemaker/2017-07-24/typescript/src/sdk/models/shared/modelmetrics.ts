import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Bias } from "./bias";
import { Explainability } from "./explainability";
import { ModelDataQuality } from "./modeldataquality";
import { ModelQuality } from "./modelquality";


// ModelMetrics
/** 
 * Contains metrics captured from a model.
**/
export class ModelMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bias" })
  bias?: Bias;

  @Metadata({ data: "json, name=Explainability" })
  explainability?: Explainability;

  @Metadata({ data: "json, name=ModelDataQuality" })
  modelDataQuality?: ModelDataQuality;

  @Metadata({ data: "json, name=ModelQuality" })
  modelQuality?: ModelQuality;
}
