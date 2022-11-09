import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Principal } from "./principal";


export class ListPrincipalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principals", elemType: shared.Principal })
  principals?: Principal[];
}
