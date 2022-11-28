import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComplianceDetails
/** 
 * Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
**/
export class ComplianceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceStatus" })
  complianceStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeysWithNoncompliantValues" })
  keysWithNoncompliantValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=NoncompliantKeys" })
  noncompliantKeys?: string[];
}
