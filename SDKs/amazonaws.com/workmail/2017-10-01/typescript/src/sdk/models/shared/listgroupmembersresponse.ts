import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";



export class ListGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Members", elemType: Member })
  members?: Member[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
