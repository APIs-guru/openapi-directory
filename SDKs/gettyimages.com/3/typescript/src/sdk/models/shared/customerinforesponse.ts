import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;
}
