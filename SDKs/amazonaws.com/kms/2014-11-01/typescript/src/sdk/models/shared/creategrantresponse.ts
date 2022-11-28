import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantId" })
  grantId?: string;

  @SpeakeasyMetadata({ data: "json, name=GrantToken" })
  grantToken?: string;
}
