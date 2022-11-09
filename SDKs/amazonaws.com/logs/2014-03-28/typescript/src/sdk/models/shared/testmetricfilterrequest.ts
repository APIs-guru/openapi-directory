import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestMetricFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @Metadata({ data: "json, name=logEventMessages" })
  logEventMessages: string[];
}
