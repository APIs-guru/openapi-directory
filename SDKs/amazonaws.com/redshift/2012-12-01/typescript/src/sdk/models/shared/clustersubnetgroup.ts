import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
import { Tag } from "./tag";



// ClusterSubnetGroup
/** 
 * Describes a subnet group.
**/
export class ClusterSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
