import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";



// Trace
/** 
 * A collection of segment documents with matching trace IDs.
**/
export class Trace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LimitExceeded" })
  limitExceeded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Segments", elemType: Segment })
  segments?: Segment[];
}
