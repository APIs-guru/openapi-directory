import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamKey } from "./streamkey";



export class GetStreamKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=streamKey" })
  streamKey?: StreamKey;
}
