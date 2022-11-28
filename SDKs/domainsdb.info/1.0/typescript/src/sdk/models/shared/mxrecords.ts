import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MxRecords extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exchange" })
  exchange?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}
