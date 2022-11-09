import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Principal } from "./principal";


export class ListPrincipalsForPortfolioOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=Principals", elemType: shared.Principal })
  principals?: Principal[];
}
