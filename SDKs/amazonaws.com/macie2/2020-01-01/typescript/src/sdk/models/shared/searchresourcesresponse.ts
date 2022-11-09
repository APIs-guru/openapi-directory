import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchingResource } from "./matchingresource";


export class SearchResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchingResources", elemType: shared.MatchingResource })
  matchingResources?: MatchingResource[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
