import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkIds" })
  checkIds: string[];
}
