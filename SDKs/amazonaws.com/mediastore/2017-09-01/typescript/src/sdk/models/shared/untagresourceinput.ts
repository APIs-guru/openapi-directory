import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
