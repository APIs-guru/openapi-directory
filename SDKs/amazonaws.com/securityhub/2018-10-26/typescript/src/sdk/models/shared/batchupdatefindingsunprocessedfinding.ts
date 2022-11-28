import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";



// BatchUpdateFindingsUnprocessedFinding
/** 
 * A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
**/
export class BatchUpdateFindingsUnprocessedFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=FindingIdentifier" })
  findingIdentifier: AwsSecurityFindingIdentifier;
}
