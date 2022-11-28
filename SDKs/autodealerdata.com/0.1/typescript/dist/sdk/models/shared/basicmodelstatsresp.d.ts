import { SpeakeasyBase } from "../../../internal/utils";
import { BasicModelStats } from "./basicmodelstats";
export declare class BasicModelStatsResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: BasicModelStats[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
