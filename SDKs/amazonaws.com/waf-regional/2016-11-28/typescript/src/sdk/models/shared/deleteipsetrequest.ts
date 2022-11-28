import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteIpSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=IPSetId" })
  ipSetId: string;
}
