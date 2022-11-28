import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TemporaryCredential
/** 
 * Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
**/
export class TemporaryCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidForInMinutes" })
  validForInMinutes?: number;
}
