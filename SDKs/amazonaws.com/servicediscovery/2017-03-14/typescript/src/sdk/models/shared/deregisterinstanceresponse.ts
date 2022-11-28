import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;
}
