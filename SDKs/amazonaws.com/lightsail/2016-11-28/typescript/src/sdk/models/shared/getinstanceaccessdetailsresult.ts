import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessDetails } from "./instanceaccessdetails";



export class GetInstanceAccessDetailsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDetails" })
  accessDetails?: InstanceAccessDetails;
}
