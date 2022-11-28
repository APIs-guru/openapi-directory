import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsForResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: string;
}
