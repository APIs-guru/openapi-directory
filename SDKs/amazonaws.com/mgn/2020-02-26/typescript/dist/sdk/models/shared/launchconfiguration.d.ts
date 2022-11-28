import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchDispositionEnum } from "./launchdispositionenum";
import { Licensing } from "./licensing";
import { TargetInstanceTypeRightSizingMethodEnum } from "./targetinstancetyperightsizingmethodenum";
export declare class LaunchConfiguration extends SpeakeasyBase {
    copyPrivateIp?: boolean;
    copyTags?: boolean;
    ec2LaunchTemplateId?: string;
    launchDisposition?: LaunchDispositionEnum;
    licensing?: Licensing;
    name?: string;
    sourceServerId?: string;
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethodEnum;
}
