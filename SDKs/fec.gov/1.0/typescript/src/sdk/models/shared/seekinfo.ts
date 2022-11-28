import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeekInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=last_indexes" })
  lastIndexes?: string;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}
