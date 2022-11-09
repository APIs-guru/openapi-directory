import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
export declare class DeviceIdentifier extends SpeakeasyBase {
    imei?: string;
    manufacturer?: string;
    meid?: string;
    model?: string;
    serialNumber?: string;
}
