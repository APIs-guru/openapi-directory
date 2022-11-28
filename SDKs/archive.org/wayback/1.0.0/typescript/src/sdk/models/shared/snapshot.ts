import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
