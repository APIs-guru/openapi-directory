import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChunkUploadResponse
/** 
 * Chunk upload response
**/
export class ChunkUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hash" })
  hash: string;

  @Metadata({ data: "json, name=size" })
  size: number;
}
