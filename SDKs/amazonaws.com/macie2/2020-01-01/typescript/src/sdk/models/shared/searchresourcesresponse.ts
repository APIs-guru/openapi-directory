import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchingResource } from "./matchingresource";



export class SearchResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchingResources", elemType: MatchingResource })
  matchingResources?: MatchingResource[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
