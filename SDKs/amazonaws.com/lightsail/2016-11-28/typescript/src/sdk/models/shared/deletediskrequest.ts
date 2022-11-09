import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskName" })
  diskName: string;

  @Metadata({ data: "json, name=forceDeleteAddOns" })
  forceDeleteAddOns?: boolean;
}
