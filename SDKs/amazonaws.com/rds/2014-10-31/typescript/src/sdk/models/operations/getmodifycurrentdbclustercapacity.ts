import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyCurrentDbClusterCapacityActionEnum {
    ModifyCurrentDbClusterCapacity = "ModifyCurrentDBClusterCapacity"
}

export enum GetModifyCurrentDbClusterCapacityVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyCurrentDbClusterCapacityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCurrentDbClusterCapacityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecondsBeforeTimeout" })
  secondsBeforeTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TimeoutAction" })
  timeoutAction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCurrentDbClusterCapacityVersionEnum;
}


export class GetModifyCurrentDbClusterCapacityHeaders extends SpeakeasyBase {
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


export class GetModifyCurrentDbClusterCapacityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyCurrentDbClusterCapacityQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyCurrentDbClusterCapacityHeaders;
}


export class GetModifyCurrentDbClusterCapacityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
