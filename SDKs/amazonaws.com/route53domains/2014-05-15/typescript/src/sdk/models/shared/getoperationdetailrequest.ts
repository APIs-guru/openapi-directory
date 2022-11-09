import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOperationDetailRequest
/** 
 * The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.
**/
export class GetOperationDetailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;
}
