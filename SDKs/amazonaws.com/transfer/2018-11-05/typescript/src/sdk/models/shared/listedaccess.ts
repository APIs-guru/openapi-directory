import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";



// ListedAccess
/** 
 * Lists the properties for one or more specified associated accesses.
**/
export class ListedAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;
}
