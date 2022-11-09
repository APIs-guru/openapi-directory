import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPolicy } from "./batchpolicy";
import { SimulationJobSummary } from "./simulationjobsummary";
import { FailedCreateSimulationJobRequest } from "./failedcreatesimulationjobrequest";
import { SimulationJobBatchErrorCodeEnum } from "./simulationjobbatcherrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";


export class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=batchPolicy" })
  batchPolicy?: BatchPolicy;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdRequests", elemType: shared.SimulationJobSummary })
  createdRequests?: SimulationJobSummary[];

  @Metadata({ data: "json, name=failedRequests", elemType: shared.FailedCreateSimulationJobRequest })
  failedRequests?: FailedCreateSimulationJobRequest[];

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobBatchErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=pendingRequests", elemType: shared.SimulationJobRequest })
  pendingRequests?: SimulationJobRequest[];

  @Metadata({ data: "json, name=status" })
  status?: SimulationJobBatchStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
