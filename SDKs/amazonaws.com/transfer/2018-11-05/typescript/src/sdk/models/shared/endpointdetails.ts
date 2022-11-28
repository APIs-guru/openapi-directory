import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointDetails
/** 
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>
**/
export class EndpointDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressAllocationIds" })
  addressAllocationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
