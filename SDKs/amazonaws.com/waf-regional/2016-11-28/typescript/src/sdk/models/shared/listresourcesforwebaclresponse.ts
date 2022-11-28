import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListResourcesForWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArns" })
  resourceArns?: string[];
}
