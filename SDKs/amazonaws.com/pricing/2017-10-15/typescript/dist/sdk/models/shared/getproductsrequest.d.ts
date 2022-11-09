import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
export declare class GetProductsRequest extends SpeakeasyBase {
    filters?: Filter[];
    formatVersion?: string;
    maxResults?: number;
    nextToken?: string;
    serviceCode?: string;
}
