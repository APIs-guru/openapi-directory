import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemberModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: number;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
