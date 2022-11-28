import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricStreamFilter
/** 
 * This structure contains the name of one of the metric namespaces that is listed in a filter of a metric stream.
**/
export class MetricStreamFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  namespace?: string;
}
