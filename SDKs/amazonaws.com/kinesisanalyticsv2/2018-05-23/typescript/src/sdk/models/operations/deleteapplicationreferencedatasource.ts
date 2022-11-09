import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationReferenceDataSource = "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource"
}


export class DeleteApplicationReferenceDataSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationReferenceDataSourceXAmzTargetEnum;
}


export class DeleteApplicationReferenceDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApplicationReferenceDataSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationReferenceDataSourceRequest;
}


export class DeleteApplicationReferenceDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApplicationReferenceDataSourceResponse?: shared.DeleteApplicationReferenceDataSourceResponse;

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
