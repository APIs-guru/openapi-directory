import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamInfo } from "./streaminfo";


export class DescribeStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamInfo" })
  streamInfo?: StreamInfo;
}
