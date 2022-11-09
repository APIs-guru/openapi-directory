import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { IpAddressRequest } from "./ipaddressrequest";
import { Tag } from "./tag";


export class CreateResolverEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @Metadata({ data: "json, name=Direction" })
  direction: ResolverEndpointDirectionEnum;

  @Metadata({ data: "json, name=IpAddresses", elemType: shared.IpAddressRequest })
  ipAddresses: IpAddressRequest[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
