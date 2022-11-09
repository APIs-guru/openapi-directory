import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationReferenceDataSource = "KinesisAnalytics_20180523.AddApplicationReferenceDataSource"
}


export class AddApplicationReferenceDataSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddApplicationReferenceDataSourceXAmzTargetEnum;
}


export class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddApplicationReferenceDataSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddApplicationReferenceDataSourceRequest;
}


export class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  addApplicationReferenceDataSourceResponse?: shared.AddApplicationReferenceDataSourceResponse;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
