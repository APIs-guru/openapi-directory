import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpProperties
/** 
 * A complex type that contains the name of an HTTP namespace.
**/
export class HttpProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=HttpName" })
  httpName?: string;
}
