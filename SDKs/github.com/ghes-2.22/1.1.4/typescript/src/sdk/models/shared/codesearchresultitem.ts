import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";



// CodeSearchResultItem
/** 
 * Code Search Result Item
**/
export class CodeSearchResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified_at" })
  lastModifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=line_numbers" })
  lineNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
