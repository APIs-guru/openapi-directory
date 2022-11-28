import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStateEnum } from "./executionstateenum";



export class DescribeExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
