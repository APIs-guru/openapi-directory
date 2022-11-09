import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachDiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskName" })
  diskName: string;

  @Metadata({ data: "json, name=diskPath" })
  diskPath: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
