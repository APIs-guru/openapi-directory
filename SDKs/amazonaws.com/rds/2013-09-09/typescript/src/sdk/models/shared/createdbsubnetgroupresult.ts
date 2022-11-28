import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroup } from "./dbsubnetgroup";



export class CreateDbSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;
}
