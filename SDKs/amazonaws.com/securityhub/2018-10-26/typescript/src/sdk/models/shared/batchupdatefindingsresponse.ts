import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";
import { BatchUpdateFindingsUnprocessedFinding } from "./batchupdatefindingsunprocessedfinding";



export class BatchUpdateFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessedFindings", elemType: AwsSecurityFindingIdentifier })
  processedFindings: AwsSecurityFindingIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedFindings", elemType: BatchUpdateFindingsUnprocessedFinding })
  unprocessedFindings: BatchUpdateFindingsUnprocessedFinding[];
}
