import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelYearDistEntry } from "./modelyeardistentry";
export declare class ModelYearDistResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: ModelYearDistEntry[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
