import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
