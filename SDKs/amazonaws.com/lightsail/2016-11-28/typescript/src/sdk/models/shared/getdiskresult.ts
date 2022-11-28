import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";



export class GetDiskResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: Disk;
}
