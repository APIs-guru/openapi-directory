import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";


// ParameterMetadata
/** 
 * Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
**/
export class ParameterMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=LastModifiedUser" })
  lastModifiedUser?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Policies", elemType: shared.ParameterInlinePolicy })
  policies?: ParameterInlinePolicy[];

  @Metadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
