import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcDescription
/** 
 * The description of the VPC in which the connector resides.
**/
export class VpcDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];
}
