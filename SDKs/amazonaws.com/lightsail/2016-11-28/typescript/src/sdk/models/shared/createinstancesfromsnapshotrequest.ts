import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { DiskMap } from "./diskmap";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";



export class CreateInstancesFromSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOnRequest })
  addOns?: AddOnRequest[];

  @SpeakeasyMetadata({ data: "json, name=attachedDiskMapping", elemType: DiskMap, elemDepth: 2 })
  attachedDiskMapping?: Map<string, DiskMap[]>;

  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames: string[];

  @SpeakeasyMetadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreDate" })
  restoreDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInstanceName" })
  sourceInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=useLatestRestorableAutoSnapshot" })
  useLatestRestorableAutoSnapshot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: string;
}
