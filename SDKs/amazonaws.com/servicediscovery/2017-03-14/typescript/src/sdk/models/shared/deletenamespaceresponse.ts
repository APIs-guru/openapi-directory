import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;
}
