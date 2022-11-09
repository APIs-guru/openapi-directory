import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SynthesizeSpeechOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioStream" })
  audioStream?: string;
}
