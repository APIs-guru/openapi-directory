import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";



export class ListPrincipalsForPortfolioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Principals", elemType: Principal })
  principals?: Principal[];
}
