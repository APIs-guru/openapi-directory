import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar" })
  avatar?: any;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=followersCount" })
  followersCount?: number;

  @Metadata({ data: "json, name=followingCount" })
  followingCount?: number;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=hostRedundancyAllowed" })
  hostRedundancyAllowed?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: Map<string, any>;
}
