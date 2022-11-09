import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReturningProduction extends SpeakeasyBase {
  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=passingUsage" })
  passingUsage?: number;

  @Metadata({ data: "json, name=percentPPA" })
  percentPpa?: number;

  @Metadata({ data: "json, name=percentPassingPPA" })
  percentPassingPpa?: number;

  @Metadata({ data: "json, name=percentReceivingPPA" })
  percentReceivingPpa?: number;

  @Metadata({ data: "json, name=percentRushingPPA" })
  percentRushingPpa?: number;

  @Metadata({ data: "json, name=receivingUsage" })
  receivingUsage?: number;

  @Metadata({ data: "json, name=rushingUsage" })
  rushingUsage?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=totalPPA" })
  totalPpa?: number;

  @Metadata({ data: "json, name=totalPassingPPA" })
  totalPassingPpa?: number;

  @Metadata({ data: "json, name=totalReceivingPPA" })
  totalReceivingPpa?: number;

  @Metadata({ data: "json, name=totalRushingPPA" })
  totalRushingPpa?: number;

  @Metadata({ data: "json, name=usage" })
  usage?: number;
}
