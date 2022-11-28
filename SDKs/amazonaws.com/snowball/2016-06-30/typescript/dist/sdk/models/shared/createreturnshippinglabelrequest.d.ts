import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingOptionEnum } from "./shippingoptionenum";
export declare class CreateReturnShippingLabelRequest extends SpeakeasyBase {
    jobId: string;
    shippingOption?: ShippingOptionEnum;
}
