import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { CpuOptions } from "./cpuoptions";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { InstanceState } from "./instancestate";



// Instance
/** 
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amiLaunchIndex" })
  amiLaunchIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=cpuOptions" })
  cpuOptions?: CpuOptions;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=rootDeviceName" })
  rootDeviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: SecurityGroupIdentifier })
  securityGroups?: SecurityGroupIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceState;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
