import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStateEnum } from "./taskstateenum";



export class DescribeTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
