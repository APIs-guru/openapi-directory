import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies?: string[];
}
