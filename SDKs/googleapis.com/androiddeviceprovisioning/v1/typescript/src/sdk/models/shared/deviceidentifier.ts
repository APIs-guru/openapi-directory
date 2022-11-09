import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceIdentifier
/** 
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
export class DeviceIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;
}
