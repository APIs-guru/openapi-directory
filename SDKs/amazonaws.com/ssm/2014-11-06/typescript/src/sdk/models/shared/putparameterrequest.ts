import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";


export class PutParameterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Overwrite" })
  overwrite?: boolean;

  @Metadata({ data: "json, name=Policies" })
  policies?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
