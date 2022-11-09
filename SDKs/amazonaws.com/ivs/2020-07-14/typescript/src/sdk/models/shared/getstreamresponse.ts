import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Stream } from "./stream";


export class GetStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stream" })
  stream?: Stream;
}
