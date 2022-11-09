import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaginationLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=rel" })
  rel?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
