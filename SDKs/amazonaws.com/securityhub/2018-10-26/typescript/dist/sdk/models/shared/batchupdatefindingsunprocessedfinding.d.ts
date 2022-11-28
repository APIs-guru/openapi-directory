import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";
/**
 * A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
**/
export declare class BatchUpdateFindingsUnprocessedFinding extends SpeakeasyBase {
    errorCode: string;
    errorMessage: string;
    findingIdentifier: AwsSecurityFindingIdentifier;
}
