import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActiveDirectory
/** 
 * Active Directory information
**/
export class ActiveDirectory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isGlobalAvailable" })
  isGlobalAvailable: boolean;
}
