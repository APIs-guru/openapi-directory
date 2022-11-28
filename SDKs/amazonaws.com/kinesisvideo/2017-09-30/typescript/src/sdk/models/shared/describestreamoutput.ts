import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";



export class DescribeStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamInfo" })
  streamInfo?: StreamInfo;
}
