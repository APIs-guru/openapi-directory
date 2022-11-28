import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountModification } from "./accountmodification";



export class DescribeAccountModificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountModifications", elemType: AccountModification })
  accountModifications?: AccountModification[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
