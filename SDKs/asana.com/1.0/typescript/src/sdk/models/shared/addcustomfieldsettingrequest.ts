import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddCustomFieldSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field" })
  customField: string;

  @Metadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @Metadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @Metadata({ data: "json, name=is_important" })
  isImportant?: boolean;
}
