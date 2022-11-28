import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionMetadata
/** 
 * Explains a dimension.
**/
export class DimensionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiName" })
  apiName?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=customDefinition" })
  customDefinition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deprecatedApiNames" })
  deprecatedApiNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=uiName" })
  uiName?: string;
}
