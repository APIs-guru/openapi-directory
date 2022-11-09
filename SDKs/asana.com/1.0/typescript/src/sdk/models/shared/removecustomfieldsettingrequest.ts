import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveCustomFieldSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field" })
  customField: string;
}
