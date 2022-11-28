import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



export class DbSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata()
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
