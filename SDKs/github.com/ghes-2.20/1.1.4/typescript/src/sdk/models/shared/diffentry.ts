import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiffEntry
/** 
 * Diff Entry
**/
export class DiffEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions" })
  additions: number;

  @Metadata({ data: "json, name=blob_url" })
  blobUrl: string;

  @Metadata({ data: "json, name=changes" })
  changes: number;

  @Metadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @Metadata({ data: "json, name=deletions" })
  deletions: number;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=patch" })
  patch?: string;

  @Metadata({ data: "json, name=previous_filename" })
  previousFilename?: string;

  @Metadata({ data: "json, name=raw_url" })
  rawUrl: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
