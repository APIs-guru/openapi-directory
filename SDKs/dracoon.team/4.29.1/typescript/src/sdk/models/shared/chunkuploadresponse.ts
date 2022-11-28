import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChunkUploadResponse
/** 
 * Chunk upload response
**/
export class ChunkUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
