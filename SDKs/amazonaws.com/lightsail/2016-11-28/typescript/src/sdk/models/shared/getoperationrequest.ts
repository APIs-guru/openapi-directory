import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationId" })
  operationId: string;
}
