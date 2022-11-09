import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";


// ComplianceItemEntry
/** 
 * Information about a compliance item.
**/
export class ComplianceItemEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Details" })
  details?: Map<string, string>;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Severity" })
  severity: ComplianceSeverityEnum;

  @Metadata({ data: "json, name=Status" })
  status: ComplianceStatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
