import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MoveAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationParentId" })
  destinationParentId: string;

  @SpeakeasyMetadata({ data: "json, name=SourceParentId" })
  sourceParentId: string;
}
