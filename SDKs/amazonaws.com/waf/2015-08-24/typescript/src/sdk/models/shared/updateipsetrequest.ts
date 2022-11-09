import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpSetUpdate } from "./ipsetupdate";


export class UpdateIpSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=IPSetId" })
  ipSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.IpSetUpdate })
  updates: IpSetUpdate[];
}
