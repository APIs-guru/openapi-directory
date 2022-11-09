import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class SetIpAddressTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType: IpAddressTypeEnum;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;
}
