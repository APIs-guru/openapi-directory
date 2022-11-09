import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubnetGroup } from "./subnetgroup";


export class CreateSubnetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetGroup" })
  subnetGroup?: SubnetGroup;
}
