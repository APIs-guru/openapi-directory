import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bias } from "./bias";
import { Explainability } from "./explainability";
import { ModelDataQuality } from "./modeldataquality";
import { ModelQuality } from "./modelquality";



// ModelMetrics
/** 
 * Contains metrics captured from a model.
**/
export class ModelMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bias" })
  bias?: Bias;

  @SpeakeasyMetadata({ data: "json, name=Explainability" })
  explainability?: Explainability;

  @SpeakeasyMetadata({ data: "json, name=ModelDataQuality" })
  modelDataQuality?: ModelDataQuality;

  @SpeakeasyMetadata({ data: "json, name=ModelQuality" })
  modelQuality?: ModelQuality;
}
