import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRateBasedRuleManagedKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManagedKeys" })
  managedKeys?: string[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
