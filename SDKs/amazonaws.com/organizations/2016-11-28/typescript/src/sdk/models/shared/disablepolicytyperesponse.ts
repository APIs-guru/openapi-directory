import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Root } from "./root";



export class DisablePolicyTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Root" })
  root?: Root;
}
