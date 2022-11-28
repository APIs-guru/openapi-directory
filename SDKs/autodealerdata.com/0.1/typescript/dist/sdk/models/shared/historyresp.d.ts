import { SpeakeasyBase } from "../../../internal/utils";
import { VehHistoryData } from "./vehhistorydata";
export declare class HistoryResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: VehHistoryData;
    modelName?: string;
    msg?: string;
    regionName?: string;
}
