import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportFindingsError } from "./importfindingserror";


export class BatchImportFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedCount" })
  failedCount: number;

  @Metadata({ data: "json, name=FailedFindings", elemType: shared.ImportFindingsError })
  failedFindings?: ImportFindingsError[];

  @Metadata({ data: "json, name=SuccessCount" })
  successCount: number;
}
