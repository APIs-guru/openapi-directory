import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExternalId" })
  externalId: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
