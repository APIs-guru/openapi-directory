import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";


export class CreateWorldGenerationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: WorldGenerationJobErrorCodeEnum;

  @Metadata({ data: "json, name=status" })
  status?: WorldGenerationJobStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=worldCount" })
  worldCount?: WorldCount;

  @Metadata({ data: "json, name=worldTags" })
  worldTags?: Map<string, string>;
}
