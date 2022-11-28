import { SpeakeasyBase } from "../../../internal/utils";
import { AbortTransactionResult } from "./aborttransactionresult";
import { CommitTransactionResult } from "./committransactionresult";
import { EndSessionResult } from "./endsessionresult";
import { ExecuteStatementResult } from "./executestatementresult";
import { FetchPageResult } from "./fetchpageresult";
import { StartSessionResult } from "./startsessionresult";
import { StartTransactionResult } from "./starttransactionresult";
export declare class SendCommandResult extends SpeakeasyBase {
    abortTransaction?: AbortTransactionResult;
    commitTransaction?: CommitTransactionResult;
    endSession?: EndSessionResult;
    executeStatement?: ExecuteStatementResult;
    fetchPage?: FetchPageResult;
    startSession?: StartSessionResult;
    startTransaction?: StartTransactionResult;
}
