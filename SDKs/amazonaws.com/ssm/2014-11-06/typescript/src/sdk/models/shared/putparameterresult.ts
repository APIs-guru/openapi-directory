import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterTierEnum } from "./parametertierenum";



export class PutParameterResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: ParameterTierEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
