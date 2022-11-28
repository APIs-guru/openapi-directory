import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
export declare class ListAssignmentsForHitResponse extends SpeakeasyBase {
    assignments?: Assignment[];
    nextToken?: string;
    numResults?: number;
}
