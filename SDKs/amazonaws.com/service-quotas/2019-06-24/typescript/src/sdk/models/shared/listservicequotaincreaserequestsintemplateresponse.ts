import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuotaIncreaseRequestInTemplate } from "./servicequotaincreaserequestintemplate";



export class ListServiceQuotaIncreaseRequestsInTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceQuotaIncreaseRequestInTemplateList", elemType: ServiceQuotaIncreaseRequestInTemplate })
  serviceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];
}
