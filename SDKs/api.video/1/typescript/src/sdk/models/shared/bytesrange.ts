import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BytesRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
