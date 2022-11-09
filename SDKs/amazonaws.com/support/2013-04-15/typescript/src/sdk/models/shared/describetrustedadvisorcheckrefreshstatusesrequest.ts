import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkIds" })
  checkIds: string[];
}
