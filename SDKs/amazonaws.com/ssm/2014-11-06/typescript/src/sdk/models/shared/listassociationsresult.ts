import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Association } from "./association";


export class ListAssociationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Associations", elemType: shared.Association })
  associations?: Association[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
