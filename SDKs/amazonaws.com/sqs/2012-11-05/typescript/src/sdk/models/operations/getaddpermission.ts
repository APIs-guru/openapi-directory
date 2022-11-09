import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetAddPermissionActionEnum {
    AddPermission = "AddPermission"
}

export enum GetAddPermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetAddPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccountIds" })
  awsAccountIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddPermissionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Actions" })
  actions: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddPermissionVersionEnum;
}


export class GetAddPermissionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetAddPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddPermissionPathParams;

  @Metadata()
  queryParams: GetAddPermissionQueryParams;

  @Metadata()
  headers: GetAddPermissionHeaders;
}


export class GetAddPermissionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
