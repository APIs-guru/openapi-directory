import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaginationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
