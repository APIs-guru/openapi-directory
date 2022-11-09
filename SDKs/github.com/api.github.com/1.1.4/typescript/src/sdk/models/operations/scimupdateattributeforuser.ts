import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimUpdateAttributeForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}

export enum ScimUpdateAttributeForUserRequestBodyOperationsOpEnum {
    Add = "add"
,    Remove = "remove"
,    Replace = "replace"
}


export class ScimUpdateAttributeForUserRequestBodyOperationsValue1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class ScimUpdateAttributeForUserRequestBodyOperationsValue2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUpdateAttributeForUserRequestBodyOperations extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}


export class ScimUpdateAttributeForUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Operations", elemType: operations.ScimUpdateAttributeForUserRequestBodyOperations })
  operations: ScimUpdateAttributeForUserRequestBodyOperations[];

  @Metadata({ data: "json, name=schemas" })
  schemas?: string[];
}


export class ScimUpdateAttributeForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimUpdateAttributeForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ScimUpdateAttributeForUserRequestBody;
}


export class ScimUpdateAttributeForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  scimUser?: shared.ScimUser;
}
