import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";



// ParameterMetadata
/** 
 * Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
**/
export class ParameterMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedUser" })
  lastModifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policies", elemType: ParameterInlinePolicy })
  policies?: ParameterInlinePolicy[];

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
