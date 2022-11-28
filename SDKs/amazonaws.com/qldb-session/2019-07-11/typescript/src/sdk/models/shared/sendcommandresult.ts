import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbortTransactionResult } from "./aborttransactionresult";
import { CommitTransactionResult } from "./committransactionresult";
import { EndSessionResult } from "./endsessionresult";
import { ExecuteStatementResult } from "./executestatementresult";
import { FetchPageResult } from "./fetchpageresult";
import { StartSessionResult } from "./startsessionresult";
import { StartTransactionResult } from "./starttransactionresult";



export class SendCommandResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbortTransaction" })
  abortTransaction?: AbortTransactionResult;

  @SpeakeasyMetadata({ data: "json, name=CommitTransaction" })
  commitTransaction?: CommitTransactionResult;

  @SpeakeasyMetadata({ data: "json, name=EndSession" })
  endSession?: EndSessionResult;

  @SpeakeasyMetadata({ data: "json, name=ExecuteStatement" })
  executeStatement?: ExecuteStatementResult;

  @SpeakeasyMetadata({ data: "json, name=FetchPage" })
  fetchPage?: FetchPageResult;

  @SpeakeasyMetadata({ data: "json, name=StartSession" })
  startSession?: StartSessionResult;

  @SpeakeasyMetadata({ data: "json, name=StartTransaction" })
  startTransaction?: StartTransactionResult;
}
