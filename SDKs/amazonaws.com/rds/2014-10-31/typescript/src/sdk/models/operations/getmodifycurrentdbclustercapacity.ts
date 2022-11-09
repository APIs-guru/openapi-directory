import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyCurrentDbClusterCapacityActionEnum {
    ModifyCurrentDbClusterCapacity = "ModifyCurrentDBClusterCapacity"
}

export enum GetModifyCurrentDbClusterCapacityVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyCurrentDbClusterCapacityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCurrentDbClusterCapacityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Capacity" })
  capacity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecondsBeforeTimeout" })
  secondsBeforeTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TimeoutAction" })
  timeoutAction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCurrentDbClusterCapacityVersionEnum;
}


export class GetModifyCurrentDbClusterCapacityHeaders extends SpeakeasyBase {
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


export class GetModifyCurrentDbClusterCapacityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyCurrentDbClusterCapacityQueryParams;

  @Metadata()
  headers: GetModifyCurrentDbClusterCapacityHeaders;
}


export class GetModifyCurrentDbClusterCapacityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
