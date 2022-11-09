import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";


export class ListDomainsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=registrationStatus" })
  registrationStatus: RegistrationStatusEnum;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
