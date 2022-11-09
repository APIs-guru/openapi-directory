import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";


export class GetInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instance" })
  instance?: Instance;
}
