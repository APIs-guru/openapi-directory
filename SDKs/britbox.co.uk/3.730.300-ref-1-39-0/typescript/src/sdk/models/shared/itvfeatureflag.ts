import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvFeatureFlag extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=flag" })
  flag?: string;
}
