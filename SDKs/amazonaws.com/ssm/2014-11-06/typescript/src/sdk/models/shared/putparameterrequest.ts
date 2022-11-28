import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";



export class PutParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Overwrite" })
  overwrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
