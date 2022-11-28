import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Interpretation } from "./interpretation";
import { Message } from "./message";
import { SessionState } from "./sessionstate";



export class RecognizeTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interpretations", elemType: Interpretation })
  interpretations?: Interpretation[];

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionState" })
  sessionState?: SessionState;
}
