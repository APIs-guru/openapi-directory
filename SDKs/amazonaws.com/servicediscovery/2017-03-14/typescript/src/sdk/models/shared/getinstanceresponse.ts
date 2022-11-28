import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



export class GetInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instance" })
  instance?: Instance;
}
