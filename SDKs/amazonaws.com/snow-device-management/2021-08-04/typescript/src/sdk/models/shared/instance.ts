import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { CpuOptions } from "./cpuoptions";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { InstanceState } from "./instancestate";


// Instance
/** 
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=amiLaunchIndex" })
  amiLaunchIndex?: number;

  @Metadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @Metadata({ data: "json, name=cpuOptions" })
  cpuOptions?: CpuOptions;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=publicIpAddress" })
  publicIpAddress?: string;

  @Metadata({ data: "json, name=rootDeviceName" })
  rootDeviceName?: string;

  @Metadata({ data: "json, name=securityGroups", elemType: shared.SecurityGroupIdentifier })
  securityGroups?: SecurityGroupIdentifier[];

  @Metadata({ data: "json, name=state" })
  state?: InstanceState;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
