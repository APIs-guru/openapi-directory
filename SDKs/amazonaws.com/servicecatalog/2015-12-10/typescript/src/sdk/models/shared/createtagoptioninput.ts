import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTagOptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
