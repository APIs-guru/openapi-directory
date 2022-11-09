import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The result of a organic search request
**/
export declare class OrganicResult extends SpeakeasyBase {
    count?: number;
    items?: Map<string, any>[];
    total?: number;
}
