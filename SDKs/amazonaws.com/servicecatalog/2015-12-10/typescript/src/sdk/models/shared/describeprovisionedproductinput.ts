import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeProvisionedProductInput
/** 
 * DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.
**/
export class DescribeProvisionedProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
