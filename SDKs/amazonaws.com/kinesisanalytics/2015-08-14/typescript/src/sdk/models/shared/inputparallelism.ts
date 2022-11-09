import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputParallelism
/** 
 * Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
**/
export class InputParallelism extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;
}
