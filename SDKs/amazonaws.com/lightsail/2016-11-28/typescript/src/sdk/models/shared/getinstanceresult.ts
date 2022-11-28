import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



export class GetInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: Instance;
}
