import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
