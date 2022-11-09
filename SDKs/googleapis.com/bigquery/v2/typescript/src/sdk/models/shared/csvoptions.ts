import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CsvOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowJaggedRows" })
  allowJaggedRows?: boolean;

  @Metadata({ data: "json, name=allowQuotedNewlines" })
  allowQuotedNewlines?: boolean;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=fieldDelimiter" })
  fieldDelimiter?: string;

  @Metadata({ data: "json, name=null_marker" })
  nullMarker?: string;

  @Metadata({ data: "json, name=preserveAsciiControlCharacters" })
  preserveAsciiControlCharacters?: boolean;

  @Metadata({ data: "json, name=quote" })
  quote?: string;

  @Metadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: string;
}
