import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceDataSyncItem } from "./resourcedatasyncitem";


export class ListResourceDataSyncResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceDataSyncItems", elemType: shared.ResourceDataSyncItem })
  resourceDataSyncItems?: ResourceDataSyncItem[];
}
