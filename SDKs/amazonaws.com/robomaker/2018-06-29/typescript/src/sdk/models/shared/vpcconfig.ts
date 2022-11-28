import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfig
/** 
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
export class VpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets: string[];
}
