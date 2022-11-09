import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHomeRegionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;
}
