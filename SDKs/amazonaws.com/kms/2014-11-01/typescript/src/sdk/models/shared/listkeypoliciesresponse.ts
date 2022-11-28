import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListKeyPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyNames" })
  policyNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
