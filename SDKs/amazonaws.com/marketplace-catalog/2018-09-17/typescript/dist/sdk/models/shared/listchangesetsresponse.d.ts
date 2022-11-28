import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetSummaryListItem } from "./changesetsummarylistitem";
export declare class ListChangeSetsResponse extends SpeakeasyBase {
    changeSetSummaryList?: ChangeSetSummaryListItem[];
    nextToken?: string;
}
