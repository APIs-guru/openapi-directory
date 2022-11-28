import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
