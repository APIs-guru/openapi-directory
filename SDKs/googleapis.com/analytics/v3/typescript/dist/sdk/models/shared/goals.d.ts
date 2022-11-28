import { SpeakeasyBase } from "../../../internal/utils";
import { Goal } from "./goal";
/**
 * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
**/
export declare class Goals extends SpeakeasyBase {
    items?: Goal[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
