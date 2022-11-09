import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigResponse
/** 
 * VPC configuration associated with your simulation job.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: boolean;

  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
