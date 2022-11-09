import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snippet } from "./snippet";


export class SimilarCompanySearch extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=employee" })
  employee?: string;

  @Metadata({ data: "json, name=industry" })
  industry?: string;

  @Metadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @Metadata({ data: "json, name=snippets", elemType: shared.Snippet })
  snippets?: Snippet[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
