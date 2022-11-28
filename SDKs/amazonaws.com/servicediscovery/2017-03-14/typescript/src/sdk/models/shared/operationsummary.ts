import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";



// OperationSummary
/** 
 * A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.
**/
export class OperationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;
}
