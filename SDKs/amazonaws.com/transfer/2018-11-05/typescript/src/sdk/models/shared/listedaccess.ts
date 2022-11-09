import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";


// ListedAccess
/** 
 * Lists the properties for one or more specified associated accesses.
**/
export class ListedAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @Metadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @Metadata({ data: "json, name=Role" })
  role?: string;
}
