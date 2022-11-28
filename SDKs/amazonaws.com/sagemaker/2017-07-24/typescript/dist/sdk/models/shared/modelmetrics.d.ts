import { SpeakeasyBase } from "../../../internal/utils";
import { Bias } from "./bias";
import { Explainability } from "./explainability";
import { ModelDataQuality } from "./modeldataquality";
import { ModelQuality } from "./modelquality";
/**
 * Contains metrics captured from a model.
**/
export declare class ModelMetrics extends SpeakeasyBase {
    bias?: Bias;
    explainability?: Explainability;
    modelDataQuality?: ModelDataQuality;
    modelQuality?: ModelQuality;
}
