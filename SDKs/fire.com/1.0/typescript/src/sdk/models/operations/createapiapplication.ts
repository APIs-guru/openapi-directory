import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApiApplicationNewApiApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=ican" })
  ican?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPayeeApprovalsRequired" })
  numberOfPayeeApprovalsRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPaymentApprovalsRequired" })
  numberOfPaymentApprovalsRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class CreateApiApplicationApiApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=ican" })
  ican?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPayeeApprovalsRequired" })
  numberOfPayeeApprovalsRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPaymentApprovalsRequired" })
  numberOfPaymentApprovalsRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}


export class CreateApiApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateApiApplicationNewApiApplication;
}


export class CreateApiApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiApplication?: CreateApiApplicationApiApplication;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
