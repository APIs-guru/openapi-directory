import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyListEntry } from "./keylistentry";



export class ListKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: KeyListEntry })
  keys?: KeyListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
