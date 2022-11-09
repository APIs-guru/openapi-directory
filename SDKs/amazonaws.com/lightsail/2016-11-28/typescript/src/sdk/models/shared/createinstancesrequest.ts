import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddOnRequest } from "./addonrequest";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";


export class CreateInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOnRequest })
  addOns?: AddOnRequest[];

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=blueprintId" })
  blueprintId: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=customImageName" })
  customImageName?: string;

  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=keyPairName" })
  keyPairName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=userData" })
  userData?: string;
}
