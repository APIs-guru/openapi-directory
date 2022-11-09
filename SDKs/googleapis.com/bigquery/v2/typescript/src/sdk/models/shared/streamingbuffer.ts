import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Streamingbuffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedBytes" })
  estimatedBytes?: string;

  @Metadata({ data: "json, name=estimatedRows" })
  estimatedRows?: string;

  @Metadata({ data: "json, name=oldestEntryTime" })
  oldestEntryTime?: string;
}
