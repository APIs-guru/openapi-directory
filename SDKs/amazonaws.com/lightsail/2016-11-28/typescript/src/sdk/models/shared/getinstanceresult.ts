import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";


export class GetInstanceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: Instance;
}
