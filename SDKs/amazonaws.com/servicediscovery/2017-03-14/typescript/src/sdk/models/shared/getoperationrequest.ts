import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;
}
