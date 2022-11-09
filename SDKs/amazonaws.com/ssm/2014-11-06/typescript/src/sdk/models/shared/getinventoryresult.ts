import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryResultEntity } from "./inventoryresultentity";


export class GetInventoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.InventoryResultEntity })
  entities?: InventoryResultEntity[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
