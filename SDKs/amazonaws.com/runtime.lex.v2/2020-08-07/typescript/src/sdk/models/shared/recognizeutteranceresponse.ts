import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecognizeUtteranceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
