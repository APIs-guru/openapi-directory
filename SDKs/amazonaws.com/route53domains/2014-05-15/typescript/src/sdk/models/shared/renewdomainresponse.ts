import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RenewDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
