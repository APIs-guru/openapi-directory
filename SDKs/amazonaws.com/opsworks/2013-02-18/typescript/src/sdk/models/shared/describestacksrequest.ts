import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStacksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackIds" })
  stackIds?: string[];
}
