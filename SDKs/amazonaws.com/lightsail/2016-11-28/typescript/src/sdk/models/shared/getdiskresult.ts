import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Disk } from "./disk";


export class GetDiskResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk" })
  disk?: Disk;
}
