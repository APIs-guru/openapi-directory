import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// MetadataRecord
/** 
 * A complex type that defines the data records returned in the report.
**/
export class MetadataRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataValues", elemType: Value })
  metadataValues?: Value[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Value;
}
