import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRateBasedRuleManagedKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManagedKeys" })
  managedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
