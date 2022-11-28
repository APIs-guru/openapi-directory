import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";



export class ListWorkflowTypesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationStatus" })
  registrationStatus: RegistrationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
