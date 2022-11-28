import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OffsetInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}
