import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAccessControlAttributeConfiguration } from "./instanceaccesscontrolattributeconfiguration";


export class CreateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceAccessControlAttributeConfiguration" })
  instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
