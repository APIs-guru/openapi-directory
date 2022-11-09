import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowExecutionStatusEnum } from "./flowexecutionstatusenum";


// FlowExecutionSummary
/** 
 * An object that contains summary information about a flow execution.
**/
export class FlowExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=flowExecutionId" })
  flowExecutionId?: string;

  @Metadata({ data: "json, name=flowTemplateId" })
  flowTemplateId?: string;

  @Metadata({ data: "json, name=status" })
  status?: FlowExecutionStatusEnum;

  @Metadata({ data: "json, name=systemInstanceId" })
  systemInstanceId?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
