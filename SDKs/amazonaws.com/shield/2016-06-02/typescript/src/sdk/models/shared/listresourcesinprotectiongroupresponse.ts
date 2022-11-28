import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListResourcesInProtectionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArns" })
  resourceArns: string[];
}
