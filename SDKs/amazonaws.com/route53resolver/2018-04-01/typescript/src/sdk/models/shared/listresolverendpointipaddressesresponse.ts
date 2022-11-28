import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressResponse } from "./ipaddressresponse";



export class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpAddresses", elemType: IpAddressResponse })
  ipAddresses?: IpAddressResponse[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
