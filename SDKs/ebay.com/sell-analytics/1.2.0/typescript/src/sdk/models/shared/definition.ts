import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Definition
/** 
 * A complex type that defines a dimension key and metrics in a traffic report.
**/
export class Definition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedName" })
  localizedName?: string;
}
