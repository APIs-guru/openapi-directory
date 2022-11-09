import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedProperty } from "./supportedproperty";


export class SupportedPropertyChildProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=unified_property" })
  unifiedProperty?: SupportedProperty;
}


export class SupportedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=child_properties", elemType: shared.SupportedPropertyChildProperties })
  childProperties?: SupportedPropertyChildProperties[];

  @Metadata({ data: "json, name=unified_property" })
  unifiedProperty?: string;
}
