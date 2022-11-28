import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { FinishedWorldsSummary } from "./finishedworldssummary";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";



export class DescribeWorldGenerationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: WorldGenerationJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=finishedWorldsSummary" })
  finishedWorldsSummary?: FinishedWorldsSummary;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorldGenerationJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=worldCount" })
  worldCount?: WorldCount;

  @SpeakeasyMetadata({ data: "json, name=worldTags" })
  worldTags?: Map<string, string>;
}
