import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeviceFleetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListDeviceFleetsXAmzTargetEnum {
    SageMakerListDeviceFleets = "SageMaker.ListDeviceFleets"
}


export class ListDeviceFleetsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListDeviceFleetsXAmzTargetEnum;
}


export class ListDeviceFleetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDeviceFleetsQueryParams;

  @Metadata()
  headers: ListDeviceFleetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDeviceFleetsRequest;
}


export class ListDeviceFleetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeviceFleetsResponse?: shared.ListDeviceFleetsResponse;

  @Metadata()
  statusCode: number;
}
