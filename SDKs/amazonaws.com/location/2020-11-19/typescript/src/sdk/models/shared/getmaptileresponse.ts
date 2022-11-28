import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapTileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blob" })
  blob?: string;
}
