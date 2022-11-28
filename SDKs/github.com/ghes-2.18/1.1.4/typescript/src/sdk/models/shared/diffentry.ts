import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiffEntry
/** 
 * Diff Entry
**/
export class DiffEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions: number;

  @SpeakeasyMetadata({ data: "json, name=blob_url" })
  blobUrl: string;

  @SpeakeasyMetadata({ data: "json, name=changes" })
  changes: number;

  @SpeakeasyMetadata({ data: "json, name=contents_url" })
  contentsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions: number;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=patch" })
  patch?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_filename" })
  previousFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_url" })
  rawUrl: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
