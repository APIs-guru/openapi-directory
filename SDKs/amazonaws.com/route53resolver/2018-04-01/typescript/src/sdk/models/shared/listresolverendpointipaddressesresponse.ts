import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpAddressResponse } from "./ipaddressresponse";


export class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpAddresses", elemType: shared.IpAddressResponse })
  ipAddresses?: IpAddressResponse[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
