import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressUpdate } from "./ipaddressupdate";


export class AssociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpAddress" })
  ipAddress: IpAddressUpdate;

  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
