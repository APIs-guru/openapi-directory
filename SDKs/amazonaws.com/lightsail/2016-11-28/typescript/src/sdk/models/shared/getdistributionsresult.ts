import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LightsailDistribution } from "./lightsaildistribution";


export class GetDistributionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributions", elemType: shared.LightsailDistribution })
  distributions?: LightsailDistribution[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
