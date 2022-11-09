import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceSharePermissionDetail } from "./resourcesharepermissiondetail";


export class GetPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: ResourceSharePermissionDetail;
}
