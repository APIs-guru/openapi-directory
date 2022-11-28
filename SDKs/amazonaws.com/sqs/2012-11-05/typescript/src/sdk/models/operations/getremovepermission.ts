import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRemovePermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}

export enum GetRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetRemovePermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemovePermissionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemovePermissionVersionEnum;
}


export class GetRemovePermissionHeaders extends SpeakeasyBase {
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


export class GetRemovePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRemovePermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRemovePermissionQueryParams;

  @SpeakeasyMetadata()
  headers: GetRemovePermissionHeaders;
}


export class GetRemovePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
