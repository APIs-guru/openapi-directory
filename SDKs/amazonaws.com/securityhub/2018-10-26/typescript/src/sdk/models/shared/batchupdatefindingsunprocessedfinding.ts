import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";


// BatchUpdateFindingsUnprocessedFinding
/** 
 * A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
**/
export class BatchUpdateFindingsUnprocessedFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @Metadata({ data: "json, name=FindingIdentifier" })
  findingIdentifier: AwsSecurityFindingIdentifier;
}
