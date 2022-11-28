import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestMetricFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @SpeakeasyMetadata({ data: "json, name=logEventMessages" })
  logEventMessages: string[];
}
