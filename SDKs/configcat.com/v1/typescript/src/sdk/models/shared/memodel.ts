import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;
}
