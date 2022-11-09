import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveDirectory
/** 
 * Active Directory information
**/
export class ActiveDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isGlobalAvailable" })
  isGlobalAvailable: boolean;
}
