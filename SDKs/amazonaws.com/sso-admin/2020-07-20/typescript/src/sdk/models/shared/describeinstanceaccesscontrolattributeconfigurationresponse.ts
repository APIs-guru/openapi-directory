import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAccessControlAttributeConfiguration } from "./instanceaccesscontrolattributeconfiguration";
import { InstanceAccessControlAttributeConfigurationStatusEnum } from "./instanceaccesscontrolattributeconfigurationstatusenum";


export class DescribeInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceAccessControlAttributeConfiguration" })
  instanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;

  @Metadata({ data: "json, name=Status" })
  status?: InstanceAccessControlAttributeConfigurationStatusEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
