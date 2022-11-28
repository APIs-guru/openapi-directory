import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvFeatureFlag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag" })
  flag?: string;
}
