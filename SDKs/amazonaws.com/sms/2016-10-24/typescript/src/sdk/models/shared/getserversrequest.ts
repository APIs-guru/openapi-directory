import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VmServerAddress } from "./vmserveraddress";


export class GetServersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=vmServerAddressList", elemType: shared.VmServerAddress })
  vmServerAddressList?: VmServerAddress[];
}
