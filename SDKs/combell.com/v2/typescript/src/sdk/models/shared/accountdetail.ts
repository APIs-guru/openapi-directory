import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Addon } from "./addon";
import { Servicepack } from "./servicepack";


// AccountDetail
/** 
 * A detailed representation of an account.
**/
export class AccountDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=addons", elemType: shared.Addon })
  addons?: Addon[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=servicepack" })
  servicepack?: Servicepack;
}
