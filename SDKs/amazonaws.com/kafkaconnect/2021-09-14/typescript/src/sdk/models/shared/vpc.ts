import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Vpc
/** 
 * Information about the VPC in which the connector resides.
**/
export class Vpc extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets: string[];
}
