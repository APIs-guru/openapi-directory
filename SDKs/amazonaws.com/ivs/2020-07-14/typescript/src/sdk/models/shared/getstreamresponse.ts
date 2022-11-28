import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";



export class GetStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: Stream;
}
