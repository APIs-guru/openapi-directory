import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Blob
/** 
 * Blob
**/
export class Blob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding: string;

  @SpeakeasyMetadata({ data: "json, name=highlighted_content" })
  highlightedContent?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
