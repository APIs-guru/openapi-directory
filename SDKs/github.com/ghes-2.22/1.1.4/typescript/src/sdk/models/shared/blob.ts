import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Blob
/** 
 * Blob
**/
export class Blob extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=encoding" })
  encoding: string;

  @Metadata({ data: "json, name=highlighted_content" })
  highlightedContent?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}
