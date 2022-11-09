import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationVpcConfiguration = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
}


export class DeleteApplicationVpcConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationVpcConfigurationXAmzTargetEnum;
}


export class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApplicationVpcConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationVpcConfigurationRequest;
}


export class DeleteApplicationVpcConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApplicationVpcConfigurationResponse?: shared.DeleteApplicationVpcConfigurationResponse;

  @Metadata()
  invalidApplicationConfigurationException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
