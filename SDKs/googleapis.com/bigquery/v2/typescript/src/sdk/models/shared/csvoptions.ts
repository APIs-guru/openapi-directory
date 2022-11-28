import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CsvOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowJaggedRows" })
  allowJaggedRows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowQuotedNewlines" })
  allowQuotedNewlines?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=null_marker" })
  nullMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=preserveAsciiControlCharacters" })
  preserveAsciiControlCharacters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: string;

  @SpeakeasyMetadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: string;
}
