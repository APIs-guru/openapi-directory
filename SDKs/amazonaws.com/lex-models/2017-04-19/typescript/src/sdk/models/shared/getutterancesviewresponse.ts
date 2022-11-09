import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UtteranceList } from "./utterancelist";


export class GetUtterancesViewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=utterances", elemType: shared.UtteranceList })
  utterances?: UtteranceList[];
}
