import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Definition
/** 
 * A complex type that defines a dimension key and metrics in a traffic report.
**/
export class Definition extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=localizedName" })
  localizedName?: string;
}
