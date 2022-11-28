import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Traffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=uniques" })
  uniques: number;
}
