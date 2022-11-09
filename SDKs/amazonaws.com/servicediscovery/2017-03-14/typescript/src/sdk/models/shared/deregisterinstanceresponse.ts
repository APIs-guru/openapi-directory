import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId?: string;
}
