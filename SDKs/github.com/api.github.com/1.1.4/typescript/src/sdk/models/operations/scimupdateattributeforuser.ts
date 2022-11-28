import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimUpdateAttributeForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}

export enum ScimUpdateAttributeForUserRequestBodyOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}


export class ScimUpdateAttributeForUserRequestBodyOperationsValue1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class ScimUpdateAttributeForUserRequestBodyOperationsValue2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ScimUpdateAttributeForUserRequestBodyOperations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


export class ScimUpdateAttributeForUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Operations", elemType: ScimUpdateAttributeForUserRequestBodyOperations })
  operations: ScimUpdateAttributeForUserRequestBodyOperations[];

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas?: string[];
}


export class ScimUpdateAttributeForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimUpdateAttributeForUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ScimUpdateAttributeForUserRequestBody;
}


export class ScimUpdateAttributeForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  scimUser?: shared.ScimUser;
}
