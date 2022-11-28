import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomDimension
/** 
 * Custom dimension.
**/
export class CustomDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
