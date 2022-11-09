import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { OriginTypeEnum } from "./origintypeenum";
import { Tag } from "./tag";


export class CreateKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @Metadata({ data: "json, name=CustomerMasterKeySpec" })
  customerMasterKeySpec?: CustomerMasterKeySpecEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KeySpec" })
  keySpec?: KeySpecEnum;

  @Metadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsageTypeEnum;

  @Metadata({ data: "json, name=MultiRegion" })
  multiRegion?: boolean;

  @Metadata({ data: "json, name=Origin" })
  origin?: OriginTypeEnum;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
