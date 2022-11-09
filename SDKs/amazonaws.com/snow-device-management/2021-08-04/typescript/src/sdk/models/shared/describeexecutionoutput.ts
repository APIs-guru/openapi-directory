import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStateEnum } from "./executionstateenum";


export class DescribeExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
