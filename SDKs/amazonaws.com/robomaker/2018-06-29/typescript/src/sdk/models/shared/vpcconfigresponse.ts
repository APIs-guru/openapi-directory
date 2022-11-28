import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigResponse
/** 
 * VPC configuration associated with your simulation job.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
