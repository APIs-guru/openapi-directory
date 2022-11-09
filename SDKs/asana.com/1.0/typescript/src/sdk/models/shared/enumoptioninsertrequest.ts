import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnumOptionInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=after_enum_option" })
  afterEnumOption?: string;

  @Metadata({ data: "json, name=before_enum_option" })
  beforeEnumOption?: string;

  @Metadata({ data: "json, name=enum_option" })
  enumOption: string;
}
