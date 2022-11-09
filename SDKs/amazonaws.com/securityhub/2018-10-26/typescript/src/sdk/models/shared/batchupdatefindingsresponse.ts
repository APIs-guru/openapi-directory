import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsSecurityFindingIdentifier } from "./awssecurityfindingidentifier";
import { BatchUpdateFindingsUnprocessedFinding } from "./batchupdatefindingsunprocessedfinding";


export class BatchUpdateFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessedFindings", elemType: shared.AwsSecurityFindingIdentifier })
  processedFindings: AwsSecurityFindingIdentifier[];

  @Metadata({ data: "json, name=UnprocessedFindings", elemType: shared.BatchUpdateFindingsUnprocessedFinding })
  unprocessedFindings: BatchUpdateFindingsUnprocessedFinding[];
}
