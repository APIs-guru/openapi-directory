import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceId
/** 
 * <p/>
**/
export class ServiceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
