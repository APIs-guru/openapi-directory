import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.
**/
export declare class Ec2AmiResource extends SpeakeasyBase {
    amiId: string;
    snowballAmiId?: string;
}
