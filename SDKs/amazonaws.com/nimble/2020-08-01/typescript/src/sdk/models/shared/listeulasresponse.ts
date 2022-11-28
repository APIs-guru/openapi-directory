import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Eula } from "./eula";



export class ListEulasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eulas", elemType: Eula })
  eulas?: Eula[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
