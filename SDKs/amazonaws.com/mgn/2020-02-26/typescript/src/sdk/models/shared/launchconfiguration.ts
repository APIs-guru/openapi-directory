import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { Licensing } from "./licensing";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";


export class LaunchConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyPrivateIp" })
  copyPrivateIp?: boolean;

  @Metadata({ data: "json, name=copyTags" })
  copyTags?: boolean;

  @Metadata({ data: "json, name=ec2LaunchTemplateID" })
  ec2LaunchTemplateId?: string;

  @Metadata({ data: "json, name=launchDisposition" })
  launchDisposition?: LaunchDispositionEnum;

  @Metadata({ data: "json, name=licensing" })
  licensing?: Licensing;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @Metadata({ data: "json, name=targetInstanceTypeRightSizingMethod" })
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
