import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddOnRequest } from "./addonrequest";
import { DiskMap } from "./diskmap";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";


export class CreateInstancesFromSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.AddOnRequest })
  addOns?: AddOnRequest[];

  @Metadata({ data: "json, name=attachedDiskMapping", elemType: shared.DiskMap, elemDepth: 2 })
  attachedDiskMapping?: Map<string, DiskMap[]>;

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @Metadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName?: string;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=keyPairName" })
  keyPairName?: string;

  @Metadata({ data: "json, name=restoreDate" })
  restoreDate?: string;

  @Metadata({ data: "json, name=sourceInstanceName" })
  sourceInstanceName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=useLatestRestorableAutoSnapshot" })
  useLatestRestorableAutoSnapshot?: boolean;

  @Metadata({ data: "json, name=userData" })
  userData?: string;
}
