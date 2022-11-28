import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetAddPermissionActionEnum {
    AddPermission = "AddPermission"
}

export enum GetAddPermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetAddPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccountIds" })
  awsAccountIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddPermissionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Actions" })
  actions: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddPermissionVersionEnum;
}


export class GetAddPermissionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetAddPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAddPermissionQueryParams;

  @SpeakeasyMetadata()
  headers: GetAddPermissionHeaders;
}


export class GetAddPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
