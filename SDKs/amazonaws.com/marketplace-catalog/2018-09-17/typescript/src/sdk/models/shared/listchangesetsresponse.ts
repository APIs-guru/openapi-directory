import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetSummaryListItem } from "./changesetsummarylistitem";



export class ListChangeSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeSetSummaryList", elemType: ChangeSetSummaryListItem })
  changeSetSummaryList?: ChangeSetSummaryListItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
