import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";



export class ListMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: Member })
  members?: Member[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
