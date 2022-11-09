import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OffsetInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;
}
