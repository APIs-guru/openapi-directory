import { SpeakeasyBase } from "../../../internal/utils";
import { TopModelEntry } from "./topmodelentry";
export declare class TopModelResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: TopModelEntry[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
