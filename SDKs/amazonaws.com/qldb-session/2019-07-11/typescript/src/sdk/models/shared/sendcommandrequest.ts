import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitTransactionRequest } from "./committransactionrequest";
import { ExecuteStatementRequest } from "./executestatementrequest";
import { FetchPageRequest } from "./fetchpagerequest";
import { StartSessionRequest } from "./startsessionrequest";



export class SendCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbortTransaction" })
  abortTransaction?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CommitTransaction" })
  commitTransaction?: CommitTransactionRequest;

  @SpeakeasyMetadata({ data: "json, name=EndSession" })
  endSession?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ExecuteStatement" })
  executeStatement?: ExecuteStatementRequest;

  @SpeakeasyMetadata({ data: "json, name=FetchPage" })
  fetchPage?: FetchPageRequest;

  @SpeakeasyMetadata({ data: "json, name=SessionToken" })
  sessionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartSession" })
  startSession?: StartSessionRequest;

  @SpeakeasyMetadata({ data: "json, name=StartTransaction" })
  startTransaction?: Map<string, any>;
}
