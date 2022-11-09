import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComplianceDetails
/** 
 * Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
**/
export class ComplianceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceStatus" })
  complianceStatus?: boolean;

  @Metadata({ data: "json, name=KeysWithNoncompliantValues" })
  keysWithNoncompliantValues?: string[];

  @Metadata({ data: "json, name=NoncompliantKeys" })
  noncompliantKeys?: string[];
}
