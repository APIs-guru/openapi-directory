import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryResultEntity } from "./inventoryresultentity";



export class GetInventoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: InventoryResultEntity })
  entities?: InventoryResultEntity[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
