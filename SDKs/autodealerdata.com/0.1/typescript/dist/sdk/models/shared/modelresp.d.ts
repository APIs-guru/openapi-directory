import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelDict } from "./modeldict";
export declare class ModelResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: ModelDict[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
