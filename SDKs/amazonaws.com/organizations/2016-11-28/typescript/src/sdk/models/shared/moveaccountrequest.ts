import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MoveAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=DestinationParentId" })
  destinationParentId: string;

  @Metadata({ data: "json, name=SourceParentId" })
  sourceParentId: string;
}
