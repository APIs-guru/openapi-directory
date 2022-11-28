import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class ArchivedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshot" })
  snapshot: Snapshot;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
