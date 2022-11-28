import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSharePermissionDetail } from "./resourcesharepermissiondetail";



export class GetPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: ResourceSharePermissionDetail;
}
