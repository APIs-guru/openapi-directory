import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnumOptionInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after_enum_option" })
  afterEnumOption?: string;

  @SpeakeasyMetadata({ data: "json, name=before_enum_option" })
  beforeEnumOption?: string;

  @SpeakeasyMetadata({ data: "json, name=enum_option" })
  enumOption: string;
}
