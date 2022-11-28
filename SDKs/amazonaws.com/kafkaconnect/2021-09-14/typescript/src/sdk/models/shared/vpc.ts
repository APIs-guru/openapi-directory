import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Vpc
/** 
 * Information about the VPC in which the connector resides.
**/
export class Vpc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets: string[];
}
