import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceInfo } from "./resourceinfo";



export class ListAssociatedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceInfo })
  resources?: ResourceInfo[];
}
