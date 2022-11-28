import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BookingOptions } from "./bookingoptions";



export class UpdateResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BookingOptions" })
  bookingOptions?: BookingOptions;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
