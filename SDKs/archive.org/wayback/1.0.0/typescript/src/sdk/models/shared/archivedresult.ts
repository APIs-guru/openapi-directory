import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Snapshot } from "./snapshot";


export class ArchivedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshot" })
  snapshot: Snapshot;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
