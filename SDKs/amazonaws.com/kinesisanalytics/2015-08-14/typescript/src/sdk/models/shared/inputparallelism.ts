import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputParallelism
/** 
 * Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
**/
export class InputParallelism extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;
}
