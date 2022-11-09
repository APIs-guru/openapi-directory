import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitTransactionRequest } from "./committransactionrequest";
import { ExecuteStatementRequest } from "./executestatementrequest";
import { FetchPageRequest } from "./fetchpagerequest";
import { StartSessionRequest } from "./startsessionrequest";


export class SendCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbortTransaction" })
  abortTransaction?: Map<string, any>;

  @Metadata({ data: "json, name=CommitTransaction" })
  commitTransaction?: CommitTransactionRequest;

  @Metadata({ data: "json, name=EndSession" })
  endSession?: Map<string, any>;

  @Metadata({ data: "json, name=ExecuteStatement" })
  executeStatement?: ExecuteStatementRequest;

  @Metadata({ data: "json, name=FetchPage" })
  fetchPage?: FetchPageRequest;

  @Metadata({ data: "json, name=SessionToken" })
  sessionToken?: string;

  @Metadata({ data: "json, name=StartSession" })
  startSession?: StartSessionRequest;

  @Metadata({ data: "json, name=StartTransaction" })
  startTransaction?: Map<string, any>;
}
