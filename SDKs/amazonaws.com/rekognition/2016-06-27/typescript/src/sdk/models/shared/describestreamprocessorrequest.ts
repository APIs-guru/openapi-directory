import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStreamProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
