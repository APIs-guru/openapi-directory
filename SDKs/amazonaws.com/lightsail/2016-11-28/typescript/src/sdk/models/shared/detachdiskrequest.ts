import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetachDiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskName" })
  diskName: string;
}
