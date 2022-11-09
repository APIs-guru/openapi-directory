import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddOnTypeEnum } from "./addontypeenum";
import { AutoSnapshotAddOnRequest } from "./autosnapshotaddonrequest";


// AddOnRequest
/** 
 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
**/
export class AddOnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOnType" })
  addOnType: AddOnTypeEnum;

  @Metadata({ data: "json, name=autoSnapshotAddOnRequest" })
  autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
}
