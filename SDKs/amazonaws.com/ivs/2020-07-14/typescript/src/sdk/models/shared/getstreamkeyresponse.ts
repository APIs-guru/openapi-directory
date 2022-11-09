import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamKey } from "./streamkey";


export class GetStreamKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=streamKey" })
  streamKey?: StreamKey;
}
