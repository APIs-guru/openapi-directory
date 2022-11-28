import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcDescription
/** 
 * The description of the VPC in which the connector resides.
**/
export class VpcDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];
}
