import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcePoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=policies" })
  policies?: string[];
}
