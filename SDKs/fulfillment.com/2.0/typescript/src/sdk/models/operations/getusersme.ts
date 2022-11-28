import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetUsersMeUserContactV2UserContactV2Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetUsersMeUserContactV2UserContactV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=contactInfo" })
  contactInfo?: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deptLeader" })
  deptLeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: GetUsersMeUserContactV2UserContactV2Merchant;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: Date;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetUsersMeUserContactV2Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetUsersMeUserContactV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=contactInfo" })
  contactInfo?: GetUsersMeUserContactV2UserContactV2;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deptLeader" })
  deptLeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: GetUsersMeUserContactV2Merchant;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: Date;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetUsersMeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUsersMeSecurity;
}


export class GetUsersMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userContactV2?: GetUsersMeUserContactV2;
}
