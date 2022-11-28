import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportFindingsError } from "./importfindingserror";



export class BatchImportFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedCount" })
  failedCount: number;

  @SpeakeasyMetadata({ data: "json, name=FailedFindings", elemType: ImportFindingsError })
  failedFindings?: ImportFindingsError[];

  @SpeakeasyMetadata({ data: "json, name=SuccessCount" })
  successCount: number;
}
