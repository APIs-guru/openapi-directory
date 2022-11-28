import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingPublishingFrequencyEnum } from "./findingpublishingfrequencyenum";
import { MacieStatusEnum } from "./maciestatusenum";



export class GetMacieSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: FindingPublishingFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MacieStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
