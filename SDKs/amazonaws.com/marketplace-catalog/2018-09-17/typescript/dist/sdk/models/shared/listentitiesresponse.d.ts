import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitySummary } from "./entitysummary";
export declare class ListEntitiesResponse extends SpeakeasyBase {
    entitySummaryList?: EntitySummary[];
    nextToken?: string;
}
