import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
