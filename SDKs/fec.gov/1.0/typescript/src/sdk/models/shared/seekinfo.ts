import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeekInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=last_indexes" })
  lastIndexes?: string;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;
}
