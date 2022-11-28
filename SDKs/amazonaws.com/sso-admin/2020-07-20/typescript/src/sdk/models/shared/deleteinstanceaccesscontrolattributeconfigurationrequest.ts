import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
