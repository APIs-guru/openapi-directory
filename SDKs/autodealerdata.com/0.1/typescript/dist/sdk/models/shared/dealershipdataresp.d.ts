import { SpeakeasyBase } from "../../../internal/utils";
import { DealershipData } from "./dealershipdata";
export declare class DealershipDataResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: DealershipData[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
