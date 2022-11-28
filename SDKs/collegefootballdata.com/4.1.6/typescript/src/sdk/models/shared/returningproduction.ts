import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReturningProduction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=passingUsage" })
  passingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=percentPPA" })
  percentPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=percentPassingPPA" })
  percentPassingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=percentReceivingPPA" })
  percentReceivingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=percentRushingPPA" })
  percentRushingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=receivingUsage" })
  receivingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=rushingUsage" })
  rushingUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=totalPPA" })
  totalPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPassingPPA" })
  totalPassingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReceivingPPA" })
  totalReceivingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRushingPPA" })
  totalRushingPpa?: number;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}
