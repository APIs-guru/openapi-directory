import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountModificationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
