import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// SubnetGroup
/** 
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p>
**/
export class SubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Subnets", elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
