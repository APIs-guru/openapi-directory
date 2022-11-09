import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListLayersCompatibleRuntimeEnum {
    Nodejs = "nodejs"
,    Nodejs43 = "nodejs4.3"
,    Nodejs610 = "nodejs6.10"
,    Nodejs810 = "nodejs8.10"
,    Nodejs10X = "nodejs10.x"
,    Nodejs12X = "nodejs12.x"
,    Nodejs14X = "nodejs14.x"
,    Java8 = "java8"
,    Java8Al2 = "java8.al2"
,    Java11 = "java11"
,    Python27 = "python2.7"
,    Python36 = "python3.6"
,    Python37 = "python3.7"
,    Python38 = "python3.8"
,    Python39 = "python3.9"
,    Dotnetcore10 = "dotnetcore1.0"
,    Dotnetcore20 = "dotnetcore2.0"
,    Dotnetcore21 = "dotnetcore2.1"
,    Dotnetcore31 = "dotnetcore3.1"
,    Nodejs43Edge = "nodejs4.3-edge"
,    Go1X = "go1.x"
,    Ruby25 = "ruby2.5"
,    Ruby27 = "ruby2.7"
,    Provided = "provided"
,    ProvidedAl2 = "provided.al2"
}


export class ListLayersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CompatibleRuntime" })
  compatibleRuntime?: ListLayersCompatibleRuntimeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;
}


export class ListLayersHeaders extends SpeakeasyBase {
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


export class ListLayersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListLayersQueryParams;

  @Metadata()
  headers: ListLayersHeaders;
}


export class ListLayersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listLayersResponse?: shared.ListLayersResponse;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
