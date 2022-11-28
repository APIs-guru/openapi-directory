import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;
}
