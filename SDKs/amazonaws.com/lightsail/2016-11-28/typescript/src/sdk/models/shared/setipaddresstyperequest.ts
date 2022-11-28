import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class SetIpAddressTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
