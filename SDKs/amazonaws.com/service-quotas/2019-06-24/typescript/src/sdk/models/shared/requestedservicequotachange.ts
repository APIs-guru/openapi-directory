import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestStatusEnum } from "./requeststatusenum";



// RequestedServiceQuotaChange
/** 
 * Information about a quota increase request.
**/
export class RequestedServiceQuotaChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=DesiredValue" })
  desiredValue?: number;

  @SpeakeasyMetadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=QuotaArn" })
  quotaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaName" })
  quotaName?: string;

  @SpeakeasyMetadata({ data: "json, name=Requester" })
  requester?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;
}
