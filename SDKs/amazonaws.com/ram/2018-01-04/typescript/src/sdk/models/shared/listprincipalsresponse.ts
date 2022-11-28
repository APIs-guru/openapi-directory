import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";



export class ListPrincipalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=principals", elemType: Principal })
  principals?: Principal[];
}
