import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddOnRequest } from "./addonrequest";
import { Tag } from "./tag";


export class CreateDiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOnRequest })
  addOns?: AddOnRequest[];

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=diskName" })
  diskName: string;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb: number;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
