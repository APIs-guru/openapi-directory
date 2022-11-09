import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecognizeUtteranceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
