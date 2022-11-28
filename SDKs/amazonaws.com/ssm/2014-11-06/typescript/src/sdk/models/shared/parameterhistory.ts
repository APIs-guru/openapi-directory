import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";



// ParameterHistory
/** 
 * Information about parameter usage.
**/
export class ParameterHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Labels" })
  labels?: string[];

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

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
