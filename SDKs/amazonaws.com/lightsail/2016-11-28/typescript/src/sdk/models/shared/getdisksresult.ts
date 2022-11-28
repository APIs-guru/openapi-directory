import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";



export class GetDisksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk })
  disks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
