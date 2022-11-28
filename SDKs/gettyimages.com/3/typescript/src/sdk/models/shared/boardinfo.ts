import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
