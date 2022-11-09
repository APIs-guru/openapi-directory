import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeSetSummaryListItem } from "./changesetsummarylistitem";
export declare class ListChangeSetsResponse extends SpeakeasyBase {
    changeSetSummaryList?: ChangeSetSummaryListItem[];
    nextToken?: string;
}
