import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListingRespPaginated } from "./listingresppaginated";
export declare class ListingResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: ListingRespPaginated;
    endDate?: Date;
    modelName?: string;
    msg?: string;
    regionName?: string;
    startDate?: Date;
}
