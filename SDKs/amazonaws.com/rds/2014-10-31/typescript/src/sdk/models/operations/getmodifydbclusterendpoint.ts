import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyDbClusterEndpointActionEnum {
    ModifyDbClusterEndpoint = "ModifyDBClusterEndpoint"
}

export enum GetModifyDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbClusterEndpointQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbClusterEndpointActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterEndpointIdentifier" })
  dbClusterEndpointIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndpointType" })
  endpointType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludedMembers" })
  excludedMembers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StaticMembers" })
  staticMembers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbClusterEndpointVersionEnum;
}


export class GetModifyDbClusterEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyDbClusterEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyDbClusterEndpointQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyDbClusterEndpointHeaders;
}


export class GetModifyDbClusterEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
