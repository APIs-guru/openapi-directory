import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



export class PlayMediaIntentHandlingInvocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: Session;
}
