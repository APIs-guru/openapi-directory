import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


export class UpdateMediaAffinityIntentHandlingInvocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=params" })
  params: Map<string, any>;

  @Metadata({ data: "json, name=session" })
  session?: Session;
}
