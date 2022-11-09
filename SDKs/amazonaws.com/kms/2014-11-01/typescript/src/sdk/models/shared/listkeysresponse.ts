import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyListEntry } from "./keylistentry";


export class ListKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Keys", elemType: shared.KeyListEntry })
  keys?: KeyListEntry[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
