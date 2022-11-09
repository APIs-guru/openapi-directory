import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListKeyPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
