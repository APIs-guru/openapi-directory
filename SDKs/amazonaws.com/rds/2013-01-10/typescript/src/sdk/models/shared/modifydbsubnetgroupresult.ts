import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";



export class ModifyDbSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;
}
