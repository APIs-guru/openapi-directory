import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { Licensing } from "./licensing";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";



export class LaunchConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyPrivateIp" })
  copyPrivateIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copyTags" })
  copyTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ec2LaunchTemplateID" })
  ec2LaunchTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchDisposition" })
  launchDisposition?: LaunchDispositionEnum;

  @SpeakeasyMetadata({ data: "json, name=licensing" })
  licensing?: Licensing;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetInstanceTypeRightSizingMethod" })
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
