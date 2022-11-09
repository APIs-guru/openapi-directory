import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceInfo } from "./resourceinfo";


export class ListAssociatedResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceInfo })
  resources?: ResourceInfo[];
}
