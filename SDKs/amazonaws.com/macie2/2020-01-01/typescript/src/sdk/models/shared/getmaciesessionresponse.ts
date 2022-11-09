import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingPublishingFrequencyEnum } from "./findingpublishingfrequencyenum";
import { MacieStatusEnum } from "./maciestatusenum";


export class GetMacieSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: FindingPublishingFrequencyEnum;

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=status" })
  status?: MacieStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
