import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// DbSubnetGroup
/** 
 * <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
**/
export class DbSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroupArn?: string;

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
