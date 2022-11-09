import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountLimit
/** 
 * Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
**/
export class AccountLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSizeUnzipped" })
  codeSizeUnzipped?: number;

  @Metadata({ data: "json, name=CodeSizeZipped" })
  codeSizeZipped?: number;

  @Metadata({ data: "json, name=ConcurrentExecutions" })
  concurrentExecutions?: number;

  @Metadata({ data: "json, name=TotalCodeSize" })
  totalCodeSize?: number;

  @Metadata({ data: "json, name=UnreservedConcurrentExecutions" })
  unreservedConcurrentExecutions?: number;
}
