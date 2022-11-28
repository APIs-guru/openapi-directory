import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
