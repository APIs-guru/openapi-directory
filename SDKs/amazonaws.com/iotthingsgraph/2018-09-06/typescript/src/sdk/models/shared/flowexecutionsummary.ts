import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionStatusEnum } from "./flowexecutionstatusenum";



// FlowExecutionSummary
/** 
 * An object that contains summary information about a flow execution.
**/
export class FlowExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=flowExecutionId" })
  flowExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=flowTemplateId" })
  flowTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FlowExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=systemInstanceId" })
  systemInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
