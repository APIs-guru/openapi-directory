import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Root } from "./root";


export class DisablePolicyTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Root" })
  root?: Root;
}
