import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomDimension
/** 
 * Custom dimension.
**/
export class CustomDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
