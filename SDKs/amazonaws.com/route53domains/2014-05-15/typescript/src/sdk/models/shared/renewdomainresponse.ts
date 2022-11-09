import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RenewDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;
}
