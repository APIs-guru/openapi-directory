import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbClusterEndpointActionEnum {
    DeleteDbClusterEndpoint = "DeleteDBClusterEndpoint"
}

export enum GetDeleteDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteDbClusterEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbClusterEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterEndpointIdentifier" })
  dbClusterEndpointIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbClusterEndpointVersionEnum;
}


export class GetDeleteDbClusterEndpointHeaders extends SpeakeasyBase {
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


export class GetDeleteDbClusterEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbClusterEndpointQueryParams;

  @Metadata()
  headers: GetDeleteDbClusterEndpointHeaders;
}


export class GetDeleteDbClusterEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
