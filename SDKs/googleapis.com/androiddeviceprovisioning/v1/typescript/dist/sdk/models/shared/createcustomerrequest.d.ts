import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Company } from "./company";
/**
 * Request message to create a customer.
**/
export declare class CreateCustomerRequest extends SpeakeasyBase {
    customer?: Company;
}
