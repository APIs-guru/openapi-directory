import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordFormatTypeEnum } from "./recordformattypeenum";



// DestinationSchema
/** 
 * Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. 
**/
export class DestinationSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecordFormatType" })
  recordFormatType: RecordFormatTypeEnum;
}
