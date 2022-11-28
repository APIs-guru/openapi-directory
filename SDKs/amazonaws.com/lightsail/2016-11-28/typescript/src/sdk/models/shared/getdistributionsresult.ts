import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LightsailDistribution } from "./lightsaildistribution";



export class GetDistributionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributions", elemType: LightsailDistribution })
  distributions?: LightsailDistribution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
