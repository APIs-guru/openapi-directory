import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn: string;
}
