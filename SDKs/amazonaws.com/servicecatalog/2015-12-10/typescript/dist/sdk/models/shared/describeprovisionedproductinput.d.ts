import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.
**/
export declare class DescribeProvisionedProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    id?: string;
    name?: string;
}
