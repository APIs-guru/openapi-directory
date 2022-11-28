import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncItem } from "./resourcedatasyncitem";



export class ListResourceDataSyncResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDataSyncItems", elemType: ResourceDataSyncItem })
  resourceDataSyncItems?: ResourceDataSyncItem[];
}
