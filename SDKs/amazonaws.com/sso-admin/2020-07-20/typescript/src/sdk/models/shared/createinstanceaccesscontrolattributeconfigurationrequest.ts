import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessControlAttributeConfiguration } from "./instanceaccesscontrolattributeconfiguration";



export class CreateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceAccessControlAttributeConfiguration" })
  instanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
