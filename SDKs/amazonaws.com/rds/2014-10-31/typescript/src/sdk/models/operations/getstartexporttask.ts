import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStartExportTaskActionEnum {
    StartExportTask = "StartExportTask"
}

export enum GetStartExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStartExportTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartExportTaskActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExportOnly" })
  exportOnly?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExportTaskIdentifier" })
  exportTaskIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IamRoleArn" })
  iamRoleArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=S3BucketName" })
  s3BucketName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=S3Prefix" })
  s3Prefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceArn" })
  sourceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartExportTaskVersionEnum;
}


export class GetStartExportTaskHeaders extends SpeakeasyBase {
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


export class GetStartExportTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStartExportTaskQueryParams;

  @Metadata()
  headers: GetStartExportTaskHeaders;
}


export class GetStartExportTaskResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
