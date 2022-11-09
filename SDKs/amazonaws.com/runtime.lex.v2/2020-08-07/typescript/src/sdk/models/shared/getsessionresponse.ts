import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Interpretation } from "./interpretation";
import { Message } from "./message";
import { SessionState } from "./sessionstate";


export class GetSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=interpretations", elemType: shared.Interpretation })
  interpretations?: Interpretation[];

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=sessionState" })
  sessionState?: SessionState;
}
