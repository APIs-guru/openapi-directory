import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobStatistics5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copied_logical_bytes" })
  copiedLogicalBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=copied_rows" })
  copiedRows?: string;
}
