import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileFileKeys } from "./filefilekeys";
import { UserIdFileIdItem } from "./useridfileiditem";
import { Range } from "./range";
import { UserUserPublicKey } from "./useruserpublickey";


// MissingKeysResponse
/** 
 * Missing keys information
**/
export class MissingKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.FileFileKeys })
  files?: FileFileKeys[];

  @Metadata({ data: "json, name=items", elemType: shared.UserIdFileIdItem })
  items?: UserIdFileIdItem[];

  @Metadata({ data: "json, name=range" })
  range?: Range;

  @Metadata({ data: "json, name=users", elemType: shared.UserUserPublicKey })
  users?: UserUserPublicKey[];
}
