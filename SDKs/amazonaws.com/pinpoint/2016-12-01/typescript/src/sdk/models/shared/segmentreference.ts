import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SegmentReference
/** 
 * Specifies the segment identifier and version of a segment.
**/
export class SegmentReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
