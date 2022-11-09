import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterArn" })
  filterArn: string;
}
