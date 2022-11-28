import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapSpritesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blob" })
  blob?: string;
}
