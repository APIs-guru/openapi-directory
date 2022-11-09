import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobStatistics5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=copied_logical_bytes" })
  copiedLogicalBytes?: string;

  @Metadata({ data: "json, name=copied_rows" })
  copiedRows?: string;
}
