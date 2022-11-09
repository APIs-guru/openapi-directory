import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitTransactionRequest } from "./committransactionrequest";
import { ExecuteStatementRequest } from "./executestatementrequest";
import { FetchPageRequest } from "./fetchpagerequest";
import { StartSessionRequest } from "./startsessionrequest";
export declare class SendCommandRequest extends SpeakeasyBase {
    abortTransaction?: Map<string, any>;
    commitTransaction?: CommitTransactionRequest;
    endSession?: Map<string, any>;
    executeStatement?: ExecuteStatementRequest;
    fetchPage?: FetchPageRequest;
    sessionToken?: string;
    startSession?: StartSessionRequest;
    startTransaction?: Map<string, any>;
}
