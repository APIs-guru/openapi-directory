import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceQuotaIncreaseRequestInTemplate } from "./servicequotaincreaserequestintemplate";


export class ListServiceQuotaIncreaseRequestsInTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceQuotaIncreaseRequestInTemplateList", elemType: shared.ServiceQuotaIncreaseRequestInTemplate })
  serviceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];
}
