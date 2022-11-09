import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListResourcesInProtectionGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArns" })
  resourceArns: string[];
}
