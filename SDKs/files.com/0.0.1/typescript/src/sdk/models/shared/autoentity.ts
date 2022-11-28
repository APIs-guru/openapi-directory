import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamic" })
  dynamic?: Map<string, any>;
}
