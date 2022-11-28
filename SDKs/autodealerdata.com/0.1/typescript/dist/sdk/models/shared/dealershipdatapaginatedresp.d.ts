import { SpeakeasyBase } from "../../../internal/utils";
import { DealershipDataPaginated } from "./dealershipdatapaginated";
export declare class DealershipDataPaginatedResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: DealershipDataPaginated;
    modelName?: string;
    msg?: string;
    regionName?: string;
}
