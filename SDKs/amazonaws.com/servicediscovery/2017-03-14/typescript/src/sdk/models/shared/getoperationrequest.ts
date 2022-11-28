import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
