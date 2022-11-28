import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHomeRegionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;
}
