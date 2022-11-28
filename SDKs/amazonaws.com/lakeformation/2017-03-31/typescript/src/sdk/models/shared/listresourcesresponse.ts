import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";



export class ListResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceInfoList", elemType: ResourceInfo })
  resourceInfoList?: ResourceInfo[];
}
