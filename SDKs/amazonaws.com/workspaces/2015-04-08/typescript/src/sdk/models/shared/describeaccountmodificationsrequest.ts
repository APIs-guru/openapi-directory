import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountModificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
