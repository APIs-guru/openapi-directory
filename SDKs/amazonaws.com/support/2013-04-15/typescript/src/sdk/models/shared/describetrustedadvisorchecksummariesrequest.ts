import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrustedAdvisorCheckSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkIds" })
  checkIds: string[];
}
