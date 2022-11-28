import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuotaIncreaseRequestInTemplate } from "./servicequotaincreaserequestintemplate";



export class GetServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceQuotaIncreaseRequestInTemplate" })
  serviceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}
