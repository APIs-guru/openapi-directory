import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BytesRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: number;

  @Metadata({ data: "json, name=to" })
  to?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
