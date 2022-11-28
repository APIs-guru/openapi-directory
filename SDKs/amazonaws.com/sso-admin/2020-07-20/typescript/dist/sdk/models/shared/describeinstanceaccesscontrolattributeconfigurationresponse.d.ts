import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessControlAttributeConfiguration } from "./instanceaccesscontrolattributeconfiguration";
import { InstanceAccessControlAttributeConfigurationStatusEnum } from "./instanceaccesscontrolattributeconfigurationstatusenum";
export declare class DescribeInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    instanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
    status?: InstanceAccessControlAttributeConfigurationStatusEnum;
    statusReason?: string;
}
