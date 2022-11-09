import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Member } from "./member";


export class ListMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Members", elemType: shared.Member })
  members?: Member[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
