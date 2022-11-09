import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddOnRequest } from "./addonrequest";
import { Tag } from "./tag";


export class CreateDiskFromSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOnRequest })
  addOns?: AddOnRequest[];

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=diskName" })
  diskName: string;

  @Metadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName?: string;

  @Metadata({ data: "json, name=restoreDate" })
  restoreDate?: string;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb: number;

  @Metadata({ data: "json, name=sourceDiskName" })
  sourceDiskName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=useLatestRestorableAutoSnapshot" })
  useLatestRestorableAutoSnapshot?: boolean;
}
