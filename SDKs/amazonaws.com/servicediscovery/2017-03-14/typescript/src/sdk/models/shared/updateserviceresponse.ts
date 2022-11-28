import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;
}
