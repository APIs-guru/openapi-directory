import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetUsersMeRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUsersMeSecurity;
}


export class GetUsersMeUserContactV2UserContactV2Merchant extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetUsersMeUserContactV2UserContactV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=contactInfo" })
  contactInfo?: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=deptLeader" })
  deptLeader?: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=merchant" })
  merchant?: GetUsersMeUserContactV2UserContactV2Merchant;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: Date;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetUsersMeUserContactV2Merchant extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetUsersMeUserContactV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=contactInfo" })
  contactInfo?: GetUsersMeUserContactV2UserContactV2;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=deptLeader" })
  deptLeader?: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=merchant" })
  merchant?: GetUsersMeUserContactV2Merchant;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: Date;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetUsersMeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userContactV2?: GetUsersMeUserContactV2;
}
