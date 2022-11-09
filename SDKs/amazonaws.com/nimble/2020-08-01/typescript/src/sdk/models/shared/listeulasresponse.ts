import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Eula } from "./eula";


export class ListEulasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eulas", elemType: shared.Eula })
  eulas?: Eula[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
