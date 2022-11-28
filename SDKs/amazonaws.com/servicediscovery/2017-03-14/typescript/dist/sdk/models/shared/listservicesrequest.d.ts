import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceFilter } from "./servicefilter";
export declare class ListServicesRequest extends SpeakeasyBase {
    filters?: ServiceFilter[];
    maxResults?: number;
    nextToken?: string;
}
