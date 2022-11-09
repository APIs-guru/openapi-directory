import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingsFilterListItem } from "./findingsfilterlistitem";


export class ListFindingsFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingsFilterListItems", elemType: shared.FindingsFilterListItem })
  findingsFilterListItems?: FindingsFilterListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
