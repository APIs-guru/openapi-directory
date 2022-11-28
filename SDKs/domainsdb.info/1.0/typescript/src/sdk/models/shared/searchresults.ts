import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domains } from "./domains";



export class SearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domains })
  domains?: Domains[];

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
