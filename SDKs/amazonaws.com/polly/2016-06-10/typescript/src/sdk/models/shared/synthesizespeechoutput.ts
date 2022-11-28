import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SynthesizeSpeechOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioStream" })
  audioStream?: string;
}
