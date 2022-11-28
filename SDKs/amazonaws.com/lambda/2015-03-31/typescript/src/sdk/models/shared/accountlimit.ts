import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountLimit
/** 
 * Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
**/
export class AccountLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSizeUnzipped" })
  codeSizeUnzipped?: number;

  @SpeakeasyMetadata({ data: "json, name=CodeSizeZipped" })
  codeSizeZipped?: number;

  @SpeakeasyMetadata({ data: "json, name=ConcurrentExecutions" })
  concurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCodeSize" })
  totalCodeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=UnreservedConcurrentExecutions" })
  unreservedConcurrentExecutions?: number;
}
