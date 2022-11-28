import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPolicy } from "./batchpolicy";
import { SimulationJobSummary } from "./simulationjobsummary";
import { FailedCreateSimulationJobRequest } from "./failedcreatesimulationjobrequest";
import { SimulationJobBatchErrorCodeEnum } from "./simulationjobbatcherrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";



export class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=batchPolicy" })
  batchPolicy?: BatchPolicy;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdRequests", elemType: SimulationJobSummary })
  createdRequests?: SimulationJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=failedRequests", elemType: FailedCreateSimulationJobRequest })
  failedRequests?: FailedCreateSimulationJobRequest[];

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobBatchErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pendingRequests", elemType: SimulationJobRequest })
  pendingRequests?: SimulationJobRequest[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SimulationJobBatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
