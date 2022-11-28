import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAttribute } from "./accountattribute";



export class AccountAttributeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccountAttribute })
  accountAttributes?: AccountAttribute[];
}
