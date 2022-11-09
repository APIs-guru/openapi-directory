import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbortTransactionResult } from "./aborttransactionresult";
import { CommitTransactionResult } from "./committransactionresult";
import { EndSessionResult } from "./endsessionresult";
import { ExecuteStatementResult } from "./executestatementresult";
import { FetchPageResult } from "./fetchpageresult";
import { StartSessionResult } from "./startsessionresult";
import { StartTransactionResult } from "./starttransactionresult";


export class SendCommandResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbortTransaction" })
  abortTransaction?: AbortTransactionResult;

  @Metadata({ data: "json, name=CommitTransaction" })
  commitTransaction?: CommitTransactionResult;

  @Metadata({ data: "json, name=EndSession" })
  endSession?: EndSessionResult;

  @Metadata({ data: "json, name=ExecuteStatement" })
  executeStatement?: ExecuteStatementResult;

  @Metadata({ data: "json, name=FetchPage" })
  fetchPage?: FetchPageResult;

  @Metadata({ data: "json, name=StartSession" })
  startSession?: StartSessionResult;

  @Metadata({ data: "json, name=StartTransaction" })
  startTransaction?: StartTransactionResult;
}
