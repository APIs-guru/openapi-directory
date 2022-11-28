import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmServerAddress } from "./vmserveraddress";



export class GetServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=vmServerAddressList", elemType: VmServerAddress })
  vmServerAddressList?: VmServerAddress[];
}
