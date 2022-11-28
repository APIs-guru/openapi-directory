import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
