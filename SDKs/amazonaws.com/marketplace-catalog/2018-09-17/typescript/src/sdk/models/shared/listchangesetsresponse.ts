import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeSetSummaryListItem } from "./changesetsummarylistitem";


export class ListChangeSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeSetSummaryList", elemType: shared.ChangeSetSummaryListItem })
  changeSetSummaryList?: ChangeSetSummaryListItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
