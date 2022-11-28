import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetGroup } from "./subnetgroup";



export class DeleteSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetGroup" })
  subnetGroup?: SubnetGroup;
}
