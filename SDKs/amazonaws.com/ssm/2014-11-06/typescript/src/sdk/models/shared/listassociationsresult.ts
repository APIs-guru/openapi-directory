import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";



export class ListAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Associations", elemType: Association })
  associations?: Association[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
