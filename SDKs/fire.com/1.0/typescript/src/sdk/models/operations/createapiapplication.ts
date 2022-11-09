import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApiApplicationNewApiApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=ican" })
  ican?: number;

  @Metadata({ data: "json, name=numberOfPayeeApprovalsRequired" })
  numberOfPayeeApprovalsRequired?: number;

  @Metadata({ data: "json, name=numberOfPaymentApprovalsRequired" })
  numberOfPaymentApprovalsRequired?: number;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class CreateApiApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateApiApplicationNewApiApplication;
}


export class CreateApiApplicationApiApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationId" })
  applicationId?: number;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=ican" })
  ican?: number;

  @Metadata({ data: "json, name=numberOfPayeeApprovalsRequired" })
  numberOfPayeeApprovalsRequired?: number;

  @Metadata({ data: "json, name=numberOfPaymentApprovalsRequired" })
  numberOfPaymentApprovalsRequired?: number;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}


export class CreateApiApplicationResponse extends SpeakeasyBase {
  @Metadata()
  apiApplication?: CreateApiApplicationApiApplication;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
