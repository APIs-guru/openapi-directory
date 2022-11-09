import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TemporaryCredential
/** 
 * Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
**/
export class TemporaryCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;

  @Metadata({ data: "json, name=ValidForInMinutes" })
  validForInMinutes?: number;
}
