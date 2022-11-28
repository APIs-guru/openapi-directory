import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snippet } from "./snippet";



export class SimilarCompanySearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @SpeakeasyMetadata({ data: "json, name=snippets", elemType: Snippet })
  snippets?: Snippet[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
