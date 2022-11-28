import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressUpdate } from "./ipaddressupdate";



export class DisassociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress: IpAddressUpdate;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
