import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKeyOwner200ApplicationJsonOperations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overage" })
  overage?: number;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}


export class ApiKeyOwner200ApplicationJsonUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar" })
  avatar?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class ApiKeyOwner200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: ApiKeyOwner200ApplicationJsonOperations })
  operations?: ApiKeyOwner200ApplicationJsonOperations[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: ApiKeyOwner200ApplicationJsonUser;
}


export class ApiKeyOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiKeyOwner200ApplicationJsonObject?: ApiKeyOwner200ApplicationJson;
}
