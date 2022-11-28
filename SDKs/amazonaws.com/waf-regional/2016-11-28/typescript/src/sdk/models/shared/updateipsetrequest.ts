import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSetUpdate } from "./ipsetupdate";



export class UpdateIpSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=IPSetId" })
  ipSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: IpSetUpdate })
  updates: IpSetUpdate[];
}
