import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";


// CodeSearchResultItem
/** 
 * Code Search Result Item
**/
export class CodeSearchResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_size" })
  fileSize?: number;

  @Metadata({ data: "json, name=git_url" })
  gitUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=last_modified_at" })
  lastModifiedAt?: Date;

  @Metadata({ data: "json, name=line_numbers" })
  lineNumbers?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=text_matches", elemType: shared.SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
