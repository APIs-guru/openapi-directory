import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTrustedAdvisorCheckSummariesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkIds" })
  checkIds: string[];
}
