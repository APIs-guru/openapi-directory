import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";
import { Value } from "./value";


// MetadataRecord
/** 
 * A complex type that defines the data records returned in the report.
**/
export class MetadataRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataValues", elemType: shared.Value })
  metadataValues?: Value[];

  @Metadata({ data: "json, name=value" })
  value?: Value;
}
