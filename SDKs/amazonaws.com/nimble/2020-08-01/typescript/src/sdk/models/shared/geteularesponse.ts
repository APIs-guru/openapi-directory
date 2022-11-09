import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Eula } from "./eula";


export class GetEulaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eula" })
  eula?: Eula;
}
