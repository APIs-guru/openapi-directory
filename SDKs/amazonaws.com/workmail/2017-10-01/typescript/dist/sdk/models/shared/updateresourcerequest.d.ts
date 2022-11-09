import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BookingOptions } from "./bookingoptions";
export declare class UpdateResourceRequest extends SpeakeasyBase {
    bookingOptions?: BookingOptions;
    name?: string;
    organizationId: string;
    resourceId: string;
}
