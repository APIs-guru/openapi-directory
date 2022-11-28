import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllowedUse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=how_can_i_use_it" })
  howCanIUseIt?: string;

  @SpeakeasyMetadata({ data: "json, name=release_info" })
  releaseInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=usage_restrictions" })
  usageRestrictions?: string[];
}
