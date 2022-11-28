import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName: string;

  @SpeakeasyMetadata({ data: "json, name=forceDeleteAddOns" })
  forceDeleteAddOns?: boolean;
}
