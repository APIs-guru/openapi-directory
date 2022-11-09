import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Segment } from "./segment";


// Trace
/** 
 * A collection of segment documents with matching trace IDs.
**/
export class Trace extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LimitExceeded" })
  limitExceeded?: boolean;

  @Metadata({ data: "json, name=Segments", elemType: shared.Segment })
  segments?: Segment[];
}
