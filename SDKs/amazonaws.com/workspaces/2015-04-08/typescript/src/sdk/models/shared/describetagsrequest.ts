import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
