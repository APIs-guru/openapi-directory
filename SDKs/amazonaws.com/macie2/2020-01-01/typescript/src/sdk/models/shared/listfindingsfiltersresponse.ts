import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterListItem } from "./findingsfilterlistitem";



export class ListFindingsFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingsFilterListItems", elemType: FindingsFilterListItem })
  findingsFilterListItems?: FindingsFilterListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
