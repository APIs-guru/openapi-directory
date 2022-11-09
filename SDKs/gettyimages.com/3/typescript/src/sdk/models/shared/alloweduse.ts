import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllowedUse extends SpeakeasyBase {
  @Metadata({ data: "json, name=how_can_i_use_it" })
  howCanIUseIt?: string;

  @Metadata({ data: "json, name=release_info" })
  releaseInfo?: string;

  @Metadata({ data: "json, name=usage_restrictions" })
  usageRestrictions?: string[];
}
