import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";
import { Servicepack } from "./servicepack";



// AccountDetail
/** 
 * A detailed representation of an account.
**/
export class AccountDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addons", elemType: Addon })
  addons?: Addon[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=servicepack" })
  servicepack?: Servicepack;
}
