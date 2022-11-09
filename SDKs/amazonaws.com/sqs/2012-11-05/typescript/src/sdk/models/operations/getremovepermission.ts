import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRemovePermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}

export enum GetRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetRemovePermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemovePermissionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemovePermissionVersionEnum;
}


export class GetRemovePermissionHeaders extends SpeakeasyBase {
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


export class GetRemovePermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRemovePermissionPathParams;

  @Metadata()
  queryParams: GetRemovePermissionQueryParams;

  @Metadata()
  headers: GetRemovePermissionHeaders;
}


export class GetRemovePermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
