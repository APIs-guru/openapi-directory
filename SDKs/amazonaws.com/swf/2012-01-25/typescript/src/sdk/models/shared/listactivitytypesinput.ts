import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";


export class ListActivityTypesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=registrationStatus" })
  registrationStatus: RegistrationStatusEnum;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
