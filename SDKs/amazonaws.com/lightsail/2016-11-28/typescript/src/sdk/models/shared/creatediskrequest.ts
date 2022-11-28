import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { Tag } from "./tag";



export class CreateDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOnRequest })
  addOns?: AddOnRequest[];

  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName: string;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
