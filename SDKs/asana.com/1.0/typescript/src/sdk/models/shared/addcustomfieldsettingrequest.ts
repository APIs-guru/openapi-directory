import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddCustomFieldSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField: string;

  @SpeakeasyMetadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=is_important" })
  isImportant?: boolean;
}
