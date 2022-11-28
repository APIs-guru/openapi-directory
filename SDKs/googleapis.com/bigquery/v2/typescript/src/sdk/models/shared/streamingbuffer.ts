import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Streamingbuffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedBytes" })
  estimatedBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedRows" })
  estimatedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=oldestEntryTime" })
  oldestEntryTime?: string;
}
