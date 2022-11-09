import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Domains } from "./domains";


export class SearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: shared.Domains })
  domains?: Domains[];

  @Metadata({ data: "json, name=next_page" })
  nextPage?: string;

  @Metadata({ data: "json, name=time" })
  time: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
