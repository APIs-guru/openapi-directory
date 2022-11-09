import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Disk } from "./disk";


export class GetDisksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=disks", elemType: shared.Disk })
  disks?: Disk[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
