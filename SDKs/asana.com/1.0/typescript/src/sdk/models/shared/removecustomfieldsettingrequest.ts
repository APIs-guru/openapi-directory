import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveCustomFieldSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField: string;
}
