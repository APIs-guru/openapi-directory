import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTagModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
