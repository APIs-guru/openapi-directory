import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbClusterEndpointActionEnum {
    ModifyDbClusterEndpoint = "ModifyDBClusterEndpoint"
}

export enum GetModifyDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbClusterEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbClusterEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterEndpointIdentifier" })
  dbClusterEndpointIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndpointType" })
  endpointType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExcludedMembers" })
  excludedMembers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=StaticMembers" })
  staticMembers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbClusterEndpointVersionEnum;
}


export class GetModifyDbClusterEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyDbClusterEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbClusterEndpointQueryParams;

  @Metadata()
  headers: GetModifyDbClusterEndpointHeaders;
}


export class GetModifyDbClusterEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
