import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UtteranceList } from "./utterancelist";



export class GetUtterancesViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=utterances", elemType: UtteranceList })
  utterances?: UtteranceList[];
}
