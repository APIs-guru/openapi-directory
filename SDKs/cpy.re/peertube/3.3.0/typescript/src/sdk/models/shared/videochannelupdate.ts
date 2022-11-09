import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoChannelUpdateOwnerAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class VideoChannelUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulkVideosSupportUpdate" })
  bulkVideosSupportUpdate?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: Map<string, any>;

  @Metadata({ data: "json, name=isLocal" })
  isLocal?: boolean;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: VideoChannelUpdateOwnerAccount;

  @Metadata({ data: "json, name=support" })
  support?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
