import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SimilarSalePriceData } from "./similarsalepricedata";
export declare class SimilarSalePriceResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: SimilarSalePriceData;
    modelName?: string;
    msg?: string;
    regionName?: string;
}
