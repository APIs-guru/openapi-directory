import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterDomainResponse
/** 
 * The RegisterDomain response includes the following element.
**/
export class RegisterDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
