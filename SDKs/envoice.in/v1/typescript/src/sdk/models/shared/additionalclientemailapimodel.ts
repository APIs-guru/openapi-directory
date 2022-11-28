import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdditionalClientEmailApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;
}
