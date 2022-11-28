import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpProperties
/** 
 * A complex type that contains the name of an HTTP namespace.
**/
export class HttpProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HttpName" })
  httpName?: string;
}
