import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterTierEnum } from "./parametertierenum";


export class PutParameterResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
