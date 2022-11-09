import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceInfo } from "./resourceinfo";


export class ListResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceInfoList", elemType: shared.ResourceInfo })
  resourceInfoList?: ResourceInfo[];
}
