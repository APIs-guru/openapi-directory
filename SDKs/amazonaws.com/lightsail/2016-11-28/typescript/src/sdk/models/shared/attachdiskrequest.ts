import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName: string;

  @SpeakeasyMetadata({ data: "json, name=diskPath" })
  diskPath: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
