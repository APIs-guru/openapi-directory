import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemsFilter } from "./opsitemrelateditemsfilter";



export class ListOpsItemRelatedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: OpsItemRelatedItemsFilter })
  filters?: OpsItemRelatedItemsFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;
}
