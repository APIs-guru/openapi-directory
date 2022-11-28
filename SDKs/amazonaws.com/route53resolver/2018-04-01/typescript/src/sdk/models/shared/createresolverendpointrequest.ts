import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { IpAddressRequest } from "./ipaddressrequest";
import { Tag } from "./tag";



export class CreateResolverEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction: ResolverEndpointDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=IpAddresses", elemType: IpAddressRequest })
  ipAddresses: IpAddressRequest[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
