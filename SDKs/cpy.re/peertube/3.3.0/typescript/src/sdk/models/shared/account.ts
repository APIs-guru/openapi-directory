import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar" })
  avatar?: any;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=followersCount" })
  followersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=followingCount" })
  followingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=hostRedundancyAllowed" })
  hostRedundancyAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: Map<string, any>;
}
