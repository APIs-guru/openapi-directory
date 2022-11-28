import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupportedPropertyChildProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unified_property" })
  unifiedProperty?: SupportedProperty;
}


export class SupportedProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=child_properties", elemType: SupportedPropertyChildProperties })
  childProperties?: SupportedPropertyChildProperties[];

  @SpeakeasyMetadata({ data: "json, name=unified_property" })
  unifiedProperty?: string;
}
