import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2AmiResource
/** 
 * A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.
**/
export class Ec2AmiResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmiId" })
  amiId: string;

  @SpeakeasyMetadata({ data: "json, name=SnowballAmiId" })
  snowballAmiId?: string;
}
