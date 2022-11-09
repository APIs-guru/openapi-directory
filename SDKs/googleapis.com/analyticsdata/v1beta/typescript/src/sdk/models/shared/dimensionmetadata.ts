import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionMetadata
/** 
 * Explains a dimension.
**/
export class DimensionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiName" })
  apiName?: string;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=customDefinition" })
  customDefinition?: boolean;

  @Metadata({ data: "json, name=deprecatedApiNames" })
  deprecatedApiNames?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=uiName" })
  uiName?: string;
}
