import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";


export class ListExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @Metadata({ data: "json, name=statusFilter" })
  statusFilter?: ExecutionStatusEnum;
}
