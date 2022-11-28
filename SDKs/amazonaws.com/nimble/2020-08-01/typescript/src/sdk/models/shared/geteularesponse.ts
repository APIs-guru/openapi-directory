import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Eula } from "./eula";



export class GetEulaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eula" })
  eula?: Eula;
}
