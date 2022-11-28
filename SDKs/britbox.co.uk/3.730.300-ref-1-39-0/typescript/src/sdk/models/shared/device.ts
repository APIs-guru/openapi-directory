import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=registrationDate" })
  registrationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
