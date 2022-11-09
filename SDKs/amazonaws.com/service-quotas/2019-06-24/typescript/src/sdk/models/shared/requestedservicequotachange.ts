import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestStatusEnum } from "./requeststatusenum";


// RequestedServiceQuotaChange
/** 
 * Information about a quota increase request.
**/
export class RequestedServiceQuotaChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaseId" })
  caseId?: string;

  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=DesiredValue" })
  desiredValue?: number;

  @Metadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=QuotaArn" })
  quotaArn?: string;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode?: string;

  @Metadata({ data: "json, name=QuotaName" })
  quotaName?: string;

  @Metadata({ data: "json, name=Requester" })
  requester?: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: RequestStatusEnum;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;
}
