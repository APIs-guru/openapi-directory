import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BookingOptions } from "./bookingoptions";


export class UpdateResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BookingOptions" })
  bookingOptions?: BookingOptions;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
