import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessControlAttributeConfiguration } from "./instanceaccesscontrolattributeconfiguration";
import { InstanceAccessControlAttributeConfigurationStatusEnum } from "./instanceaccesscontrolattributeconfigurationstatusenum";



export class DescribeInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceAccessControlAttributeConfiguration" })
  instanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InstanceAccessControlAttributeConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
