import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileFileKeys } from "./filefilekeys";
import { UserIdFileIdItem } from "./useridfileiditem";
import { Range } from "./range";
import { UserUserPublicKeyOutput } from "./useruserpublickey";



// MissingKeysResponseOutput
/** 
 * Missing keys information
**/
export class MissingKeysResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileFileKeys })
  files?: FileFileKeys[];

  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserIdFileIdItem })
  items?: UserIdFileIdItem[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserUserPublicKeyOutput })
  users?: UserUserPublicKeyOutput[];
}
