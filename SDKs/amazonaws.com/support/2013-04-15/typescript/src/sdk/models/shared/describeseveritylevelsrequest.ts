import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSeverityLevelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
