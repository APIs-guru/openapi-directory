import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAccessDetails } from "./instanceaccessdetails";


export class GetInstanceAccessDetailsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessDetails" })
  accessDetails?: InstanceAccessDetails;
}
