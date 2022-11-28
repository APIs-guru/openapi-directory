import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackIds" })
  stackIds?: string[];
}
