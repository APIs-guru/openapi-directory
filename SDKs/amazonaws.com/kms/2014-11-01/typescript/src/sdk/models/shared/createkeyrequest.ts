import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { OriginTypeEnum } from "./origintypeenum";
import { Tag } from "./tag";



export class CreateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MultiRegion" })
  multiRegion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Origin" })
  origin?: OriginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
