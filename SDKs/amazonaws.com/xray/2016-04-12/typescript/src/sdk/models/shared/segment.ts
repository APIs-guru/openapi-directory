import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Segment
/** 
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
