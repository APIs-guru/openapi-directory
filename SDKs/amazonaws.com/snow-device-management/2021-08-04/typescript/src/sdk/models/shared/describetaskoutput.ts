import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStateEnum } from "./taskstateenum";


export class DescribeTaskOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
