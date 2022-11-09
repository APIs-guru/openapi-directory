import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiKeyOwner200ApplicationJsonOperations extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overage" })
  overage?: number;

  @Metadata({ data: "json, name=usage" })
  usage?: number;
}


export class ApiKeyOwner200ApplicationJsonUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar" })
  avatar?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class ApiKeyOwner200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: operations.ApiKeyOwner200ApplicationJsonOperations })
  operations?: ApiKeyOwner200ApplicationJsonOperations[];

  @Metadata({ data: "json, name=user" })
  user?: ApiKeyOwner200ApplicationJsonUser;
}


export class ApiKeyOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiKeyOwner200ApplicationJsonObject?: ApiKeyOwner200ApplicationJson;
}
