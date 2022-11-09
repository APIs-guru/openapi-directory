import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamKey } from "./streamkey";


export class CreateStreamKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamKey" })
  streamKey?: StreamKey;
}
