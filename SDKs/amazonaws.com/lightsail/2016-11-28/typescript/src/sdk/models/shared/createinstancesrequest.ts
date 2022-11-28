import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";



export class CreateInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOnRequest })
  addOns?: AddOnRequest[];

  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=blueprintId" })
  blueprintId: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=customImageName" })
  customImageName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: string;
}
