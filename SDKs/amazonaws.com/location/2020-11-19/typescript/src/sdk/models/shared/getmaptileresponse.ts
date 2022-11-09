import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapTileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blob" })
  blob?: string;
}
