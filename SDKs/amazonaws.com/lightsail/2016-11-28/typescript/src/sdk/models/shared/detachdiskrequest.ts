import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName: string;
}
