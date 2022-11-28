import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";



// ComplianceItemEntry
/** 
 * Information about a compliance item.
**/
export class ComplianceItemEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity: ComplianceSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ComplianceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
